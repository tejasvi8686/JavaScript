// Problem 4: Count Vowels (Easy)
//
// Return how many vowels (a, e, i, o, u) are in the string.
// Count upper and lower case.
//
// countVowels("hello")      -> 2
// countVowels("JavaScript") -> 3
//
// Run: node 04_countVowels.js

function countVowels(str) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [["hello"], 2],
  [["JavaScript"], 3],
  [["AEIOU"], 5],
  [["rhythm"], 0],
  [[""], 0],
];

for (const [input, expected] of tests) {
  const got = countVowels(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
