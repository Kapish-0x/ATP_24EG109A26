//create min-express app(Separate route)
import exp from 'express'
import {Usermodel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middlewares/verifytoken.js'
const {sign} = jwt
export const userApp=exp.Router()

//Define  USER REST API Routes
//user login
userApp.post("/auth",async(req,res)=> {
    //get user cred obj fromm client
    const {email,password} = req.body;
    //verify email
    let user = await Usermodel.findOne({email:email})
    //if email not exist
    if(!user) {
        return res.status(404).json({message: "Invalid Email"})
    }
    //if fetched compare passwords
    let result = await compare(password,user.password) 
    //if password doesnt match
    if(!result) {
        return res.status(400).json({message: "Invalid Password"})
    }
    //if password are matched
    //create token (jsonwebtoken -> jwt )
    const signedToken = sign({email: user.email},process.env.SECRET_KEY,{expiresIn: '1h'})
    //store token as http cookie only 
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure: false
    })
    //send res
    res.status(200).json({message: "Login Success", payload: user})
});
    //create new user 
    userApp.post("/users",async(req,res)=>{
        //get new user obj from req
        const newUser = req.body;
        //hash the password
        const hashPass = await hash(newUser.password,10)
        //replpace plain pass with the hash pass
        newUser.password = hashPass
        //create new user document
        const newUserDocument = new Usermodel(newUser)
        //save
        const result =await newUserDocument.save();
        console.log(result);
        //send res
        res.status(201).json({message: "User created"});
    });

    //read all users(protected routes)
    userApp.get("/users",async(req,res)=>{
        //read all users from db
        let userList = await Usermodel.find()
        //send res
        res.status(200).json({message: "users", payload: userList})
    });

    //read by object id
    userApp.get("/user", verifyToken,async(req,res)=> {
        //read user email from req
        const emailOfUser = req.user?.email;
        //console.log(emailOfUser);
        //find user by id 
        const userObj = await Usermodel.findOne({email: emailOfUser}).populate("cart.product");
        //if user not found 
        if(!userObj) {
            return res.status(404).json({message: "User not found"})
        }
        //send res
        res.status(200).json({message: "user", payload: userObj})
    })

    //update a user by id
    userApp.put("/users/:id",verifyToken, async(req,res)=> {
        //get modified user from req
        const modifiedUser = req.body;
        const uid = req.params.id;
        //find user by id & update
        const updatedUser= await Usermodel.findByIdAndUpdate(uid,{$set:{...modifiedUser}}, {new:true, runValidators:true})
        //send res
        res.status(200).json({message: "user modified", payload: updatedUser});
    });

    //delete a user by id 
    userApp.delete("/users/:id",verifyToken, async(req,res)=> {
        const userId = req.params.id;
        const deletedUser = await Usermodel.findByIdAndDelete(userId);
        if(!deletedUser){
           return res.status(404).json({message: "User not found!"})
        }
        res.status(200).json({message : "User deleted", payload: deletedUser});
    });

    //add product to the cart
   /* userApp.put("/cart/product-id/:pid",verifyToken, async(req,res,next)=> {
        //get product id from url param
        let productId=req.params.pid;
        //get current user details
        const emailOfUser = req.user?.email;
        //add to cart
        let result = await Usermodel.findOneAndUpdate({email : emailOfUser}, {$push: {cart : {product : productId}}});
        //user invalid
        if(!result) {
            return res.status(404).json({message: "User not found"});
        } 
        res.status(200).json({message:"product added to cart"})
    })
        */

   userApp.put("/cart/product-id/:pid", verifyToken, async (req, res) => {
  const productId = req.params.pid;
  const emailOfUser = req.user?.email;

  // fetch user first
  let user = await Usermodel.findOne({ email: emailOfUser });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // check if product already exists in cart
  let item = user.cart.find(c => c.product.toString() === productId);

  if (item) {
    // increment count if product exists
    await Usermodel.updateOne(
      { email: emailOfUser, "cart.product": productId },
      { $inc: { "cart.$.count": 1 } }
    );
    return res.status(200).json({ message: "Product count incremented" });
  } else {
    // push new product with count = 1
    await Usermodel.updateOne(
      { email: emailOfUser },
      { $push: { cart: { product: productId, count: 1 } } }
    );
    return res.status(200).json({ message: "Product added to cart" });
  }
});
//app.use(middleware) ----> every request(application level middlewares)
//userApp.get(path,middleware,req-handler) ------> will execute only for a specific route(route level middlewares)