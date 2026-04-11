import exp from 'express'
import { empModel } from '../model/empmodel.js'
export const empApp= exp.Router()

//create new emp
   empApp.post("/emp",async(req,res)=>{
    //get new emp obj from req
    const newEmp =req.body;
    //create new emp doc
    const newEmpDoc = new empModel(newEmp)
    //save
    await newEmpDoc.save();
   //send res
   res.status(201).json({message:"emp created"})   
   })


  //read all emps
  empApp.get("/emp",async(req,res)=>{
     //read all emp from db
     let empList = await empModel.find()
     //send res
     res.status(200).json({message:"all emps", payload: empList})
  }) 



  //update a emp by id
empApp.put("/emp/:id", async (req,res)=>{
    //get modified emp from req
    const modifiedEmp = req.body;
    const uid= req.params.id;
    //find emp by id & update
    const updatedEmp= await empModel.findByIdAndUpdate(uid,{$set:{...modifiedEmp}},{ returnDocument:"after" });
    //send res
    res.status(200).json({message:"emp modified", payload:updatedEmp})
})



//delete an emp by id
empApp.delete("/emp/:id", async(req,res)=>{
    const uid=req.params.id;
    const deletedEmp = await empModel.findByIdAndDelete(uid);
    if(!deletedEmp){
     return res.status(404).json({message:"emp not found"})
        }
    res.status(200).json({message:"emp deleted", payload:deletedEmp})
})

