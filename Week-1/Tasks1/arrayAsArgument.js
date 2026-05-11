// array as argument

//passing array as argument in the function
let test = function (arr) {
  //initially the sum is initialized to 0
  let sum = 0;
  //for loop to traverse all the elements of the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //adding all elements
  }
  //return sum value
  return sum;
};

//elements of array
let arr = [26, 27, 7, 15];
//passing to function
let result = test(arr);
//printing result
console.log(result);
