// Problem 1: Reverse a String (Easy)
//
// Write a function that takes a string and returns it reversed.
// Try it twice: once with a for loop, once with built-in methods.
//
// reverseString("hello") -> "olleh"
// reverseString("")      -> ""
//
// Run: node 01_reverseString.js

function reverseString(str) {
  // Write your code here
  
  // how i solve this first take string "hello" and itrrteata a for loop on it from the last so it store in reverse order 

  //"I'll create an empty string called reversed. Then I'll loop from the last index, str.length - 1, down to 0, and add each character to reversed. Finally I'll return reversed. This is O(n) time because I visit each character once."
  
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i-- ) {

    reversed = reversed + str[i];
    console.log("i =", i, "| letter =", str[i], "| reversed =", reversed);

  }

  return reversed

  
}


// ---- Tests (don't edit below) ----
const tests = [
  [["hello"], "olleh"],
  [["JavaScript"], "tpircSavaJ"],
  [["a"], "a"],
  [[""], ""],
];

for (const [input, expected] of tests) {
  const got = reverseString(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
