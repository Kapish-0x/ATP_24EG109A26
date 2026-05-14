const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let r = students.filter((s)=>s.marks>=40)
console.log(r)

//find() the student who scored 92
let f = students.find((s)=>s.marks==92)
console.log(f)

//findIndex() of student "Kiran"
let c = students.findIndex((s)=>s.name==='Kiran')
console.log(c)

//map() to add a grade field
// ≥90 → A
// ≥75 → B
//  ≥60 → C
// else → D
let k = students.map(o=> ({
  ...o,
  grade: o.marks >= 90 ? 'A' : o.marks >= 75 ? 'B' : o.marks >= 60 ? 'C' : 'D'
}))
console.log(k)

//reduce() to calculate average marks
let n = students.length
let sum = students.reduce((acc,ele)=>acc+ele.marks,0)
let avg = sum/n
console.log(avg)