// Problem 7: Valid Anagram (Easy)
//
// Return true if the two strings use exactly the same letters
// the same number of times (ignore case).
//
// isAnagram("listen", "silent") -> true
// isAnagram("hello", "world")   -> false
//
// Hint: reuse the idea from Problem 6.
// Follow-up: can you do it without sorting? Why might that be faster?
//
// Run: node 07_isAnagram.js

function isAnagram(a, b) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [["listen", "silent"], true],
  [["Listen", "Silent"], true],
  [["hello", "world"], false],
  [["aab", "abb"], false],
  [["abc", "abcd"], false],
];

for (const [input, expected] of tests) {
  const got = isAnagram(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
