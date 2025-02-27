function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
//iincrement n decrement
//please NOTE that the numbers are incremented and decremented after it was evaluated
function increment (n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}


// //you can also multiply and divide in increments and decrements 
// //Note that these methods modify the variable in place. So, if we have two functions that depend on the same external variable, the order in which they are called matters. Follow along in the console
// number = 10;
// function add5() {
//   return (number += 5);
// }

// function divideBy3() {
//   return (number /= 3);
// }

// divideBy3(); //=> 3.3333333333333335

// add5(); //=> 8.333333333333334

// // reset number
// number = 10;

// add5(); //=> 15

// divideBy3(); //=> 5

// //parsing numbers in strings to actual numbers using parseInt and parseFloat
// console.log(parseInt("2.2222", 10)) 
// console.log(parseFloat("2.222")) 
function makeInt(n){
    return parseInt(n, 10);
}
function preserveDecimal(n){
    return parseFloat(n);
}