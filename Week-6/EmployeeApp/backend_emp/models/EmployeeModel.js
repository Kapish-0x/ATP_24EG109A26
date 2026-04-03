import { Schema , model } from "mongoose";

const employeeSchema = new Schema (
    {
        name: {
            type: String,
            required: [true , 'Name is required'],
        },
        email : {
            type: String,
            required: [true , 'Email is required'],
            unique: [true , 'Email already exists'],
        },
        mobile: {
            type: Number,
            required: [true, 'Mobile number is required'],
            unique: [true , 'Number already exists'],
        },
        designation: {
            type: String,
            required: [true , 'Designation is required'], 
        },
        companyName : {
            type: String,
            required: [true , 'Name of company is required']
        }
    },
    {
        timestamps: true,
        versionKey: false,
        strict: "throw",
    },
);

//create a model
export const EmployeeModel = model("emp" , employeeSchema);