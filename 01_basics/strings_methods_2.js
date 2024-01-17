/***************  strings methods  *****************/

let name = "manikant"

// give substring starting from first index value till last (index value-1)(not including the last index 4)
console.log(name.substring(0,4)) 

// The endsWith() method returns true if a string ends with a specified string. Otherwise it returns false.
console.log(name.endsWith("a"))

// slice(), it always slice from left to right direction. And so start must appear before end
console.log(name.slice(2,5));
console.log(name.slice(-4,-2));

// trim()
let str1 = "   sharma     "
console.log(str1.trim());

// split(), paramater behaves as delimeter, and it returns array of words  saperated by delimeter
let str2 = "manikant-sharma-the-king"
console.log(str2.split("-"));