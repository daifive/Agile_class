// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
console.log("hello world");

function isLeaapYear(n){
    if(n%400==0){
        return true
    }
    else if ((n%100!=0) && (n%4==0))
    {
        return true
    }
    else{
        return false
    }
}

console.log("2000:"+isLeaapYear(2000));
console.log("1900:"+isLeaapYear(1900));
console.log("2004:"+isLeaapYear(2004));
console.log("2003:"+isLeaapYear(2003));