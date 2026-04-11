import exp from 'express'
export const userApp = exp.Router()


let users=[]

//create  API(REST API)
//route to handle GET request of a cient(http://localhost:4000/users)
userApp.get('/users' , (req,res)=>{
    //read all users and send response
    res.json({message:"all users",payload:users})
})

//route handle POST request of a client 
userApp.post('/users',(req,res)=>{
    //get new user from client
    const newUser = req.body
    //push user into users
    users.push(newUser)
    //send respond
    console.log({message: "user created"})

})
//route handle PUT request of a client 
userApp.put('/users',(req,res)=>{
  //get modified user from client
  let modifiedUser=req.body
  //get index of existing uder in users array
  let index = users.findIndex(userObj=>userObj.id === modifiedUser.id)
  //if user not found
  if(index === -1) {
    return res.json({message: "User not found"})
  }
  //update user with index
  users.splice(index,1,modifiedUser)
  //send res  
  res.json({message: "User Updated"})
})
//route handle DELETE request of a client 
userApp.delete('/users/:id',(req,res)=>{
    //get id of user from url parameter
    let idOfUrl = Number(req.params.id)
    //find the index of the user
    let index = users.findIndex(userObj=>userObj.id = idOfUrl)
    //if user not found
    if(index === -1) {
        return res.json({message: "User not found to delete"})
    }
    //delete user 
    users.splice(index,1)
    //send res
    res.json({message: "User deleted"})
})

// to get the details of a specific user
userApp.get('/users/:id',(req,res)=> {
    //get id 
    let i = Number(req.params.id)
    //find index
    let index = users.findIndex(userObj=>userObj.id === i)
    //if id not found
    if(index === -1) {
        return res.json({message: "User not found"})
    }
    //show res
    res.json({message: "user found hurrayy!", payload: users[index]})
})