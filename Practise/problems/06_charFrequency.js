// Problem 6: Character Frequency (Easy)
//
// Return an object counting how many times each character appears.
// Keys should appear in the order each character is first seen.
//
// charFrequency("hello") -> { h: 1, e: 1, l: 2, o: 1 }
//
// This "count things in an object/Map" pattern is the base for many
// interview problems (anagrams, first unique char, most frequent item).
//
// Run: node 06_charFrequency.js

function charFrequency(str) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [["hello"], { h: 1, e: 1, l: 2, o: 1 }],
  [["aaa"], { a: 3 }],
  [["abcabc"], { a: 2, b: 2, c: 2 }],
  [[""], {}],
];

for (const [input, expected] of tests) {
  const got = charFrequency(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
