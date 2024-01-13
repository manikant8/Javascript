// --------------------Number()----------------
let score = 45
let names = "45"
let lexo = "45abc"
console.log(typeof(score)) 
console.log(typeof names)

let valueInNumber1 = Number(names)
console.log(typeof(valueInNumber1))

let valueInNumber2 = Number(lexo)

if (typeof valueInNumber2 === 'number' && !isNaN(valueInNumber2)) {
    console.log("Yes, It is a number");
} else {
    console.log("No, It is NOT a number");
}
// console.log(typeof(valueInNumber2))
// console.log(valueInNumber2)

// string NaN
let a = "Manikant"
console.log(Number(a))

// undefined NaN
let b
console.log(Number(b))

// boolen true => 1
let c = true
console.log(Number(c))

// boolen false => 0
let d = false
console.log(Number(d))

// --------------------Boolean()----------------
let e = 34
console.log(Boolean(e))

let f = "3g"
console.log(Boolean(f))

// many other conversions like string(), etc.