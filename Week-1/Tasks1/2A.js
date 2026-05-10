//Finding greatest of 3 numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
//if num1 is greater than num2 and num3
if (num1 > num2 && num1 > num3) {
  console.log("num1 is the greatest");
}
//if num2 is greater than num1 and num3
else if (num2 > num3 && num2 > num1) {
  console.log("num2 is the greatest");
}
//if num3 is greater than num1 and num2
else if (num3 > num1 && num3 > num2) {
  console.log("num3 is the greatest");
}
//if none, all are equal
else {
  console.log("All numbers are equal");
}
