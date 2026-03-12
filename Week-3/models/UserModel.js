import { Schema, model, Types } from "mongoose";

//create cart schema {product , count}
  const cartSchema = new Schema({
    product:{
      type: Types.ObjectId,
      ref:"product" //name of product model
    },
    count: {
      type: Number,
      default: 1
    }
  })
// create user Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "UserName cannot be empty"],
    minLength: [4, "Min length of username is 4 chars"],
    maxLength: [6, "Username size max is 6 chars"],
  },
  password: {
    type: String,
    required: [true, "Password Required"],
  },
  email: {
    type: String,
    required: [true, "Email Required"],
    unique:[true,"Email already exists"],
  },
  age: {
    type: Number,
  },
  cart:[cartSchema]
},
{
    versionKey: false,
    timestamps: true,
});

// generate UserModel
export const Usermodel = model("user", userSchema);