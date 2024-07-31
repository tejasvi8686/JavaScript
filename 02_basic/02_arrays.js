const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// If we push one array into the second array, it does not become a single array; instead, it becomes one array inside another array. (it push the extishng array)

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat()

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

/*
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.
*/

// spread operator

// The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array:

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(another_array);

// The flat() method concatenates sub-array elements.
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Tejasvi"));

// convert this in the array

console.log(Array.from("Tejasviraj"));

//Array from convert string unto the array

console.log(Array.from({ name: "tejasvi" })); //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;


// Array.of() covert the bracket in the string in the array format
console.log(Array.of(score1, score2, score3));



