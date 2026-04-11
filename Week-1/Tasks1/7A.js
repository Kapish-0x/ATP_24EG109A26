// Write a JavaScript program to find the index of an array element. If the element is not found, it should return "Not found"
let test = function (arr,key) {
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] === key) {
            return i+1
        } 
    }
    return "Not found"
}
let arr = [6,7,15,26,27]
let t = 26
let result = test(arr,t)
console.log(result) 
