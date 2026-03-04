//3 & 4 sum and min
let marks = [90,78,65,98]
let sum = 0;
let min = marks[0];
for(let i = 0 ; i < marks.length ;i++) {
sum+=marks[i];
if(marks[i] < min) {
    min = marks[i];
}
}
console.log(`Total sum is ${sum} and minimum marks is ${min}`)