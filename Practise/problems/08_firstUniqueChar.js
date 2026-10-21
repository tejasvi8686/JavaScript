// Problem 8: First Non-Repeating Character (Easy/Medium)
//
// Return the first character that appears only once in the string.
// If every character repeats, return null.
//
// firstUniqueChar("swiss")    -> "w"
// firstUniqueChar("aabb")     -> null
//
// Run: node 08_firstUniqueChar.js

function firstUniqueChar(str) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [["swiss"], "w"],
  [["leetcode"], "l"],
  [["loveleetcode"], "v"],
  [["aabb"], null],
  [[""], null],
];

for (const [input, expected] of tests) {
  const got = firstUniqueChar(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
