// Problem 10: Flatten a Nested Array (Medium)
//
// Return a single flat array from an array that can be nested
// to any depth. Don't use the built-in arr.flat().
//
// flatten([1, [2, [3, [4]], 5]]) -> [1, 2, 3, 4, 5]
//
// Hint: recursion. Use Array.isArray() to check each item.
// This is a favourite JavaScript-specific interview question.
//
// Run: node 10_flatten.js

function flatten(arr) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [[[1, [2, [3, [4]], 5]]], [1, 2, 3, 4, 5]],
  [[[1, 2, 3]], [1, 2, 3]],
  [[[[[["deep"]]]]], ["deep"]],
  [[[[], [1, []], 2]], [1, 2]],
];

for (const [input, expected] of tests) {
  const got = flatten(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
