//greatest of 3 using functions
let test = function greatestThree(a , b , c) {
    if(a>b && a>c) {
        return a;
    } else if(b>c && b>a) {
        return b;
    } else if(c>a && c>b) {
        return c;
    }
    else return "All equal"
}

let result = test(26,27,7)
console.log(result)
