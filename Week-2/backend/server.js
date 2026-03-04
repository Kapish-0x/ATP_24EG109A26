//Create HTTP server
import exp from 'express';
const app=exp();

//use body parser middleware
app.use(exp.json())

//set a port number 
const port=4000;
//assign port number to HTTP server
app.listen(port, () => console.log(`server listening to port: ${port}...`))

/*
create product api with 
 create new Product (productId ,name , brand , price)
 read all products
 read all product by brand
 update a product 
 delete a product by id 
*/

//test data (replace this test data with database)
    //let users=[]
    let products=[]

//create  API(REST API)
//route to handle GET request of a cient(http://localhost:4000/users)
// app.get('/users' , (req,res)=>{
//     //read all users and send response
//     res.json({message:"all users",payload:users})
// })
//read all products
app.get('/products', (req,res)=> {
    res.json({message: "all products" , payload: products})
})
//read all products by brand*
app.get('/products/:brand',(req,res)=> {
    //get the brand name
    let brandOfUrl = req.params.brand
    //check the brandname
    const filtered = products.filter(p=>p.brand.toLowerCase() === brandOfUrl.toLowerCase())
    //display the products
    res.json({message: `all products of ${brandOfUrl}`, payload:filtered})
})
//update a product
app.put('/products',(req,res)=> {
    //get modified item from client
    let modifiedProduct = req.body
    //get its index
    let index = products.findIndex(productObj=>productObj.productId === modifiedProduct.productId)
    if(index === -1) {
        return res.json({message: "Product not found!Sorry"})
    }
    //update
    products.splice(index,1,modifiedProduct)
    //res
    res.json({message: "Product Found and Updated"})
})
//deleting a product by id
app.delete('/products/:productId', (req,res)=>{
    //get the index 
    let indexOfUrl = Number(req.params.productId)
    //match 
    let index = products.findIndex(productObj=>productObj.productId === indexOfUrl)
    if(index === -1) {
        return res.json({message: "Product not found to delete"})
    }
    //delete
    products.splice(index,1)
    //res
    res.json({message: "Product Deleted"})
})

app.post('/products', (req,res)=>{
    const newProduct = req.body
    products.push(newProduct)
    res.json({message: "Product added sucessfully"})
})
/*
//route handle POST request of a client 
app.post('/users',(req,res)=>{
    //get new user from client
    const newUser = req.body
    //push user into users
    users.push(newUser)
    //send respond
    console.log({message: "user created"})

})
//route handle PUT request of a client 
app.put('/users',(req,res)=>{
  //get modified user from client
  let modifiedUser=req.body
  //get index of existing uder in users array
  let index = users.findIndex(userObj=>userObj.id === modifiedUser.id)
  //if user not found
  if(index === -1) {
    return res.json({message: "User not found"})
  }
  //update user with index
  users.splice(index,1,modifiedUser)
  //send res  
  res.json({message: "User Updated"})
})
//route handle DELETE request of a client 
app.delete('/users/:id',(req,res)=>{
    //get id of user from url parameter
    let idOfUrl = Number(req.params.id)
    //find the index of the user
    let index = users.findIndex(userObj=>userObj.id = idOfUrl)
    //if user not found
    if(index === -1) {
        return res.json({message: "User not found to delete"})
    }
    //delete user 
    users.splice(index,1)
    //send res
    res.json({message: "User deleted"})
})

// to get the details of a specific user
app.get('/users/:id',(req,res)=> {
    //get id 
    let i = Number(req.params.id)
    //find index
    let index = users.findIndex(userObj=>userObj.id === i)
    //if id not found
    if(index === -1) {
        return res.json({message: "User not found"})
    }
    //show res
    res.json({message: "user found hurrayy!", payload: users[index]})
})
*/