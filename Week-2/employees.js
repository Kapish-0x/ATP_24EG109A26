const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter() employees from IT department
let r = employees.filter((e)=>e.department==='IT')
console.log(r)

//find() employee with salary 30000
let f = employees.find((e)=>e.salary===30000)
console.log(f)

//findIndex() of employee "Neha"
let a = employees.findIndex((e)=>e.name==='Neha');
console.log(a)

//map() to add: netSalary = salary + 10% bonus
let l = employees.map(e=>
  e.salary + 0.1*e.salary
)
console.log(l)

//reduce() to calculate total salary payout
let q = employees.reduce((acc,ele)=>acc+ele.salary,0)
console.log(q)