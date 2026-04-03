import exp from 'express'
export const empApp = exp.Router()
import { EmployeeModel } from '../models/EmployeeModel.js';

//create an employee
empApp.post("/" , async(req,res)=> {
    //get emp from req
    const newEmp = req.body;
    //create new emp document
    const newEmpDoc = new EmployeeModel(newEmp);
    //save the document
    await newEmpDoc.save();
    //send res 
    res.status(201).json({messgage:"Employee created"});
});

//read all employees 
empApp.get("/read" , async (req,res) => {
    //read employees
    const empList = await EmployeeModel.find();
    //send res
    res.status(200).json({message:"Employees",payload:empList});
});

// update employee
empApp.put("/:email", async (req, res) => {
    const empEmail = req.params.email;
    const updatedData = req.body;
    const updatedEmp = await EmployeeModel.findOneAndUpdate(
        { email: empEmail },
        { $set: updatedData },
        { returnDocument: "after" }
    );

    if (!updatedEmp) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee updated", payload: updatedEmp });
});

// delete employee by email
empApp.delete("/:email", async (req, res) => {
    const empEmail = req.params.email;
    const deletedEmp = await EmployeeModel.findOneAndDelete({ email: empEmail });
    if (!deletedEmp) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted", payload: deletedEmp });
});