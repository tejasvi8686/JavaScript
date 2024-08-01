/* When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers. */

// LET
// The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope
let a = 10;

// CONST
// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope
const b = 20;

// The var keyword was used in all JavaScript code from 1995 to 2015.
// The var keyword should only be used in code written for older browsers
// It has the Global scoped or function scoped
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "tejasvi";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);

  two();
}

one();

if (true) {
  const username = "tejasvi";

  if (username === "tejasvi") {
    const website = "youtube";
    console.log(username + website);
  }

  //   console.log(website);
}

// console.log(username);

///////////////////////////////////////INTRESTING////////////////////////////////////
console.log(addone(5));
function addone(num) {
  return num + 1;
}



// function expresion
//console.log(addTwo(5)); throw error because this function sore in addTwo variable it's not postion top of the the function
const addTwo = function (num) {
  return num + 2;
};

console.log((addTwo(5)));


