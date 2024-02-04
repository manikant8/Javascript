const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// array is taking the entire array as it's element
// marvel_heros.push(dc_heroes)

// console.log(marvel_heros[3]);

let newArr = marvel_heros.concat(dc_heroes);
// console.log([newArr, marvel_heros, dc_heroes]);

// concatination two arrays using spread operator(...)
let newArr2 = [...marvel_heros,...dc_heroes, "shaktimaan"]
// console.log(newArr2);

// flat() returns NEW flatted array
let newArr3 = [1,2,3,[4,5],[[6,4,[8]]]];
console.log(newArr3.flat(Infinity));
