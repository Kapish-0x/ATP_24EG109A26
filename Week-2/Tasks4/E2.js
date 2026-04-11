let user = {
    name:'Ravi',
    city:'Hyderabad',
};
let copyUser={...user,age:25}
console.log('Original Obj', user)
console.log('Copy: ' , copyUser)