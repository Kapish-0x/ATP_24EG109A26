const marks = [78, 92, 35, 88, 40, 67];

//filter() marks ≥ 40 (pass marks)
let f = marks.filter((m)=>m>=40)
console.log(f)

//map() to add 5 grace marks to each student
let a = marks.map(m =>
    m+5
)
console.log(a)

//reduce() to find highest mark
let x = marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(x)

//find() first mark below 40
let r = marks.find((n)=>n<40)
console.log(r)

//findIndex() of mark 92
let q = marks.findIndex((k)=>k===92)
console.log(q)