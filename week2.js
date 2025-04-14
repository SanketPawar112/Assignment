//Question 1
let age = 25;
let isAdult = age >= 18;

//question 2
let x = 10;
let y = 5;
let add = x + y;
let mul = x * y;
let mod = x % y;

//question 3
let n = 7;
let isEven = n % 2 === 0 ? "Even" : "Odd";

//question 4
let arr = [];
for(let i=1; i<6; i++){
    arr.push(i);
}

//question 5
function sq(n){
    return n * n;
}

//Example
console.log("age : ", age);
console.log("Person is adult : ", isAdult);
console.log("sum : ", add);
console.log("Multiplication : ", mul);
console.log("Modulus : ", mod);
console.log("Number is : ", isEven);
console.log("array : ", arr);
console.log("Square of 5 is : ", sq(5));