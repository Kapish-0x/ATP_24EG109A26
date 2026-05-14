const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let r = cart.filter((cartObj)=>cartObj.inStock)
console.log(r);


//Use map() to create a new array with:  { name, totalPrice }
let m = cart.map(i=>({
  name: i.name,
  totalPrice: i.quantity*i.price
}))
console.log(m)

//Use find() to get details of "Mouse"

let f = cart.find((cartObj)=>cartObj.name=='Mouse')
console.log(f);


//Use findIndex() to find the position of "Keyboard"
let c = cart.findIndex((cartObj)=>cartObj.name==='Keyboard')
console.log(c)

//Use reduce() to calculate grand total cart value
let w = cart.reduce((acc,ele)=>acc+ele.price,0)
console.log(w)