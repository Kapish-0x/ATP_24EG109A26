//Create HTTP server
import exp from 'express';
const app=exp();
import {userApp} from "./API/userAPI.js"
import {productApp} from "./API/productAPI.js"
//use body parser middleware (in-built middleware)
app.use(exp.json())

//create custom middleware
function middleware1(req,res,next) {
    //send res from middleware
    //res.json({message: "this res from middleware1"})
    //forward req to next
    console.log("middleware1 executed")
    next()
}
function middleware2(req,res,next) {
    //send res from middleware
    //res.json({message: "this res from middleware2"})
    //forward req to next
    console.log("middleware2 executed")
    next()
}
//use middlewares
app.use(middleware1)
app.use(middleware2)

//user-api
app.use('/user-api',userApp)
//product-api
app.use('/product-api',productApp)
//set a port number 
const port=4000;
//assign port number to HTTP server
app.listen(port, () => console.log(`server listening to port: ${port}...`))


