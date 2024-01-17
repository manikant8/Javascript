let score = 100
console.log(typeof score);

let balance = new Number(400)
console.log(typeof balance);
console.log(balance);

console.log( balance.toString().length);





// I believe that the former gives you a fixed number of decimal places, whereas the latter gives you a fixed number of significant digits.

Math.PI.toFixed(2); // "3.14"
Math.PI.toPrecision(2); // "3.1"
//https://stackoverflow.com/questions/3337849/difference-between-tofixed-and-toprecision
let num = 123.4563
console.log(num.toFixed(2))

console.log(num.toPrecision(2));

let hundreds = 100000000000
console.log(hundreds.toLocaleString("en-IN"));

/************Maths**************** */
// having values within a range

const min = 4
const max = 10

console.log(Math.floor(Math.random()*(max-min+1)) + min);