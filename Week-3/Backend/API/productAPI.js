import exp from 'express'
export const productApp = exp.Router()
//test data (replace this test data with database)
    let products=[]

//read all products
productApp.get('/products', (req,res)=> {
    res.json({message: "all products" , payload: products})
})
//read all products by brand*
productApp.get('/products/:brand',(req,res)=> {
    //get the brand name
    let brandOfUrl = req.params.brand
    //check the brandname
    const filtered = products.filter(p=>p.brand.toLowerCase() === brandOfUrl.toLowerCase())
    //display the products
    res.json({message: `all products of ${brandOfUrl}`, payload:filtered})
})
//update a product
productApp.put('/products',(req,res)=> {
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
productApp.delete('/products/:productId', (req,res)=>{
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

productApp.post('/products', (req,res)=>{
    const newProduct = req.body
    products.push(newProduct)
    res.json({message: "Product added sucessfully"})
})
