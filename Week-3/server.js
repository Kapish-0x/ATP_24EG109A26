//Create express app
import exp from 'express';
import {connect} from 'mongoose';
import {userApp} from "./APIs/Userapi.js";
import {productApp} from "./APIs/Productapis.js";
import cookieParser from "cookie-parser";
import {config} from 'dotenv'

config()
//create a mini express app
const app = exp()
//add body parser(to extract data from json req body)
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser())
//forward req to UserApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)
//start server
app.listen(4000,()=>console.log("server on port 4000..."))

//connect to DB server
async function connectDB() {
    try {
        await connect(process.env.DB_URL);
        console.log("DB connection success")
    } catch (err) {
        console.log("err in DB connection:" ,err)
    }
}

connectDB()


//error handling middleware (always at the end of file)
app.use((err, req, res, next) => {
  console.error(err);

  if (err.code === 11000) {
    return res.status(400).json({ message: "Duplicate field value", error: err.keyValue });
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({ message: "Validation failed", errors: messages });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: "Invalid ID format", error: err.message });
  }

  res.status(500).json({ message: "Server error", error: err.message });
});
