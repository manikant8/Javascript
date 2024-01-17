const name = "Ashish Sharma"
const rollNo = `23CS06013`
let college = 'XYT'

// " ". '', ``  //strings can be written using any of these.

let name2 = name
console.log("hello, my name is " +name+  " , my Roll no is " + rollNo+ " & my college is "+college)

// string interpolation, ${} works as. Only works with backticks(``)
console.log(`hello, my name is ${name}, my Roll no is ${rollNo} & my college is ${college}`)
console.log([name, name2]);
name2 = "Manikant Sharma"
console.log([name, name2]);


let name3 = new String("john");
console.log(name);
console.log(name3);
console.log(name.toUpperCase());

console.log([typeof name, typeof name3]);



