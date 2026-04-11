import exp from 'express'
import {verifyToken} from '../middlewares/VerifyToken.js'
import { UserModel } from '../models/UserModel.js';
export const adminApp=exp.Router()


//read all users and authors (email)
adminApp.get("/details",verifyToken("ADMIN"), async (req, res)=> {
    //find all the users
    const users = await UserModel.find(
        {role: {$in: ["USER","AUTHOR"]}},
        {email: 1 , role: 1 , isUserActive: 1}
    );
    if(!users) {
        return res.status(400).json({message: "No users found"});
    }
    res.status(200).json({message: "All Users", payload: users});
});


// Block or activate user/author
adminApp.patch("/block/:id", verifyToken("ADMIN"), async (req, res) => {
  const { id } = req.params;
  const { isUserActive } = req.body;  

  const updatedUser = await UserModel.findByIdAndUpdate(
    id,
    { isUserActive },
    { new: true }   
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({message: "User Updated" ,payload: updatedUser});
});