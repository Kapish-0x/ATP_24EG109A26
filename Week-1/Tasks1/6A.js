// array as argument 
let test = function (arr) {
    let sum = 0
    for(let i = 0; i< arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}
let arr = [26,27,7,15]
let result = test(arr)
console.log(result)