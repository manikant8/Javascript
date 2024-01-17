// // let- local scope
// // var- scope leak problem
// // const - creates a constant var with local scope

// var
// if(3 > 2){
//     var a = 5;
//     console.log(a);
// }
// console.log(a);  //"var" is visible here because of scope leak


// let
// if(3 > 2){
//     let a = 5;
//     console.log(a);
// }
// console.log(a);  //"let" is NOT visible here. It's scope is within the block only. similarly with "const"

// // const
// if(3 > 2){
//     const a = 5;
//     console.log(a);
// }
// console.log(a);  //var is visible here because of scope leak

const rollno = "23CS06013"
let names = 'Manikant Sharma'
var college = "IIT BBS"
college = "IIT BBSR"
// rollno = 1100410030 wrong assignment
let state; //variable declared WITHOUT any assignment is treated as "undefined"
console.table([rollno, names, college, state])
