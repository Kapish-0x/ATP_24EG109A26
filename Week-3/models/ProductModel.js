import {Schema,model} from 'mongoose';

//create Product schema
const productSchema = new Schema({
    productId: {
        type: Number,
        required:[true,"Product Id is required"],
        unique:[true,"Product Id already exists"],
    },
    productName: {
        type: String,
        required:[true,"Product Name is required"],
    },
    price: {
        type: Number,
        required:[true,"Price is a mandate field"],
        min:[10000,"Min price must be 10000"],
        max:[50000,"max price is 50000"],
    },
    brand: {
        type: String,
        required:[true,"Brand name is required"],
    },
},
{
    versionKey: false,
    timestamps: true,
});

//generate a Product Model
export const ProductModel = model("product",productSchema);