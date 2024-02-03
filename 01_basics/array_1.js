// Array in JS are Hetrogeneous Objects, 0 indexed
const myArr = [1, true, "hello", {name: "manikant", colleg:"IIT BBS"}]
// console.log([myArr, myArr[1], myArr[2], myArr[3], myArr[3].name, myArr[2][1]]);

// array in JS are Dynamic
// myArr[4] = 78
// myArr[myArr.length] = 67
// console.log(myArr);

// "array-copy" operation creates "Shallow copies"
// let myArr2 = myArr;
// console.log(myArr2);
// myArr2[myArr2.length] = 56;
// console.log([myArr, myArr2]);


// declare an array with literal notation
let myArr4 = [1,2,3];

// declare an array with array constructor
// let myArr3 = new Array(1,2,3)

/*----------------------------methods---------------------*/
myArr4.push(7) //add element at last and return the length of new array. 
myArr4.push(8)
myArr4.pop()  // return value is The removed element.

// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
// it shifts existing elrments, so not so optimised
// return value is The new length of the array.
let value = myArr4.unshift(-2, -1, 0);  
// console.log([myArr4, value]);


// The shift() method removes an elements from the beginning of an array.
// The shift() method overwrites the original array.
// it shifts existing elrments, so not so optimised
// return value is The removed element.
let value2 = myArr4.shift()
console.log(myArr4);

// includes() returns True if number is in array otherwise returns false
console.log(myArr4.includes(-1));

// indexof() returns the index of element in the array, if the element is present otherwise returns -1.
console.log("index = "+myArr4.indexOf(12));


myArr5 = [0,1,2,3,4,5]
// slice() does not include the element at last index an does not change the original array
console.log([myArr5.slice(1,4), myArr5]);

// splice() includes the element at last index and does changes the original array
console.log([myArr5.splice(1,4), myArr5]);