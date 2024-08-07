// primitives

// call by value

// 7 types :  String  ,
// Number ,
// Bollean ,
// null = empty ,
// undefined = variable declared memory space declared not  declared vaue ,
// symbol

const score = 100;
const scoreValue = 100.3;

const id = Symbol("123");
const anotherId = Symbol("123");

const outside = null;

console.log(id === anotherId);

// Non primitives (primitives)

// Array, Object, Function

const heros = ["shaktiman", "maagraj", "doga"];

let myobj = {
  name: "hitesh",
  age: "22",
};

const myfunction = function () {
  console.log("Hello tejasvi");
};

console.log(typeof id);
 

// Type of value	Result
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Symbol   "symbol"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********************************************************************************

// stack (primitive), Heap (Non-primitive) 

//primitive ka ek copy milta hai (call by value)
//Non- Primitive  change the original valuce this is called by refrence


let myYoutubename = "tejasviraj"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : 'user@google.com',
    upi : 'user@ybl',
}

let userTwo = userOne

userTwo.email = "tejasviraj8686@gmail.com"

console.log(userOne);
console.log(userTwo.email);