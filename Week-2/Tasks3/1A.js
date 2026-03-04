const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter() temperatures above 35
let r = temperatures.filter((ele)=>ele>35);
console.log(r)

//find() first temperature above 40
let f = temperatures.find((ele)=>ele>40)
console.log(f);

//findIndex() of temperature 28
let i = temperatures.findIndex((ele)=>ele===28)
console.log(i);

//reduce() to calculate average temperature
let n = temperatures.length
let sum = temperatures.reduce((acc,ele)=>acc+ele)
let avg = sum / n
console.log(avg)

//map() to convert all temperatures from Celsius → Fahrenheit
let m = temperatures.map(s=>
    (s*(9/5))+32
)
console.log(m);