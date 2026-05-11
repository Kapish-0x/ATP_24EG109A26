const courses = ["javascript", "react", "node", "mongodb", "express"];
//filter() courses with name length > 5
let r = courses.filter((m)=>m.length > 5)
console.log(r)

//map() to convert course names to uppercase
let m = courses.map(s=>
    s.toUpperCase()
)
console.log(m)

//find() the course "react"
let f = courses.find((m)=>m==='react')
console.log(f)

//findIndex() of "node"
let c = courses.findIndex((g)=>g==='node')
console.log(c)