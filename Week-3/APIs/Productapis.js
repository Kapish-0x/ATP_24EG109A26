//create min-express app
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
import {verifyToken} from '../middlewares/verifytoken.js'
export const productApp = exp.Router()

//Define REST API Routes
//create new Products
productApp.post("/products",async(req,res)=> {
    //get new product obj from req
    const newProd = req.body;
    //create a new Product Document
    const newProdDoc = new ProductModel(newProd);
    //save
    const result = await newProdDoc.save();
    console.log(result);
    //res
    res.status(201).json({message: "Product created"});
});

//read all products
productApp.get("/products",verifyToken,async(req,res)=> {
    //read all products from db
    let prodList = await ProductModel.find()
    //send res
    res.status(200).json({message: "Product List", payload: prodList})
});

//read by object id
productApp.get("/products/:id",verifyToken, async(req,res)=> {
    //read object id from req params
    const pid = req.params.id;
    //find user by id 
    const prodObj = await ProductModel.findById(pid)
    //if product not found
    if(!prodObj) {
        return res.status(404).json({message: "Product not found"})
    }
    //send res
    res.status(200).json({message: "Product found", payload: prodObj})
});

//update a product by id 
productApp.put("/products/:id",verifyToken,async(req,res)=> {
    //get modified product from req
    const modifiedProd = req.body;
    //get pid
    const pid = req.params.id
    //find the product & update
    const updatedProd = await ProductModel.findByIdAndUpdate(pid,{$set: {...modifiedProd}}, {new: true, runValidators: true})
    //send res
    res.status(200).json({message: "Product modified", payload: updatedProd})
});

//delete a product by id
productApp.delete("/products/:id",verifyToken,async(req,res)=> {
    const pid = req.params.id;
    const deletedProd = await ProductModel.findByIdAndDelete(pid);
    if(!deletedProd) {
        return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message: "Product Deleted", payload: deletedProd})
});
