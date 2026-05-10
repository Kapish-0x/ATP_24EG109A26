//greatest of 3 using functions

//function declaration
let test = function greatestThree(a, b, c) {
  //if a is greater than b and c return a
  if (a > b && a > c) {
    return a;
  }
  //if b is greater than a and c return b
  else if (b > c && b > a) {
    return b;
  }
  //if c is greater than a and b return c
  else if (c > a && c > b) {
    return c;
  }
  //if none, then all are equal
  else return "All equal";
};

//parameters of the function
let result = test(26, 27, 7);
//printing the result
console.log(result);
