//3 & 4 sum and min
//marks array
let marks = [90, 78, 65, 98];
//initially sum is 0
let sum = 0;
//initially the minimum marks is the first element
let min = marks[0];
//for loop to traverse each element add it and also check if its the min value
for (let i = 0; i < marks.length; i++) {
  sum += marks[i]; //adding every element
  if (marks[i] < min) {
    min = marks[i]; //checking each element if its lesser than the prev value of min
  }
}
//printing the final sum and min value
console.log(`Total sum is ${sum} and minimum marks is ${min}`);
