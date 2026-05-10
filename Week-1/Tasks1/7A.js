// Write a JavaScript program to find the index of an array element. If the element is not found, it should return "Not found"

//declaration of the function
let test = function (arr, key) {
  //for loop to traverse all the elements of the array
  for (let i = 0; i < arr.length; i++) {
    //if the current element is equal to the key value then return is index
    if (arr[i] === key) {
      return i + 1;
    }
  }
  //else element not found
  return "Not found";
};
//array
let arr = [6, 7, 15, 26, 27];
//target value to find
let t = 26;
//passing array
let result = test(arr, t);
//printing the result
console.log(result);
