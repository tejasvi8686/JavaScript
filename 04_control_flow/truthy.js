const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//false values
// false , 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0" 'false', ' ', [] , {}, function () {}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }


// const a = 0;
// const b = ""

// console.log( a == b);

// Nullish coalescoing operator (??): null undefined

let val1 ;

// val1 = 5 ??  10
// val1 = null ?? 10
// var1 = undefined ?? 15 
val1 = null ?? 20 ?? 100



console.log(val1);

// ternimary operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");



