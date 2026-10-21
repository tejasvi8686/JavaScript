// Problem 9: Two Sum (Medium, very common in interviews)
//
// Given an array of numbers and a target, return the indexes [i, j]
// (i < j) of the two numbers that add up to the target.
// There is always exactly one answer.
//
// twoSum([2, 7, 11, 15], 9) -> [0, 1]   because 2 + 7 = 9
//
// Step 1: solve it with two nested loops (O(n^2)).
// Step 2: solve it in one loop using an object/Map (O(n)).
// In an interview, explain step 1 first, then improve it.
//
// Run: node 09_twoSum.js

function twoSum(nums, target) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [[[2, 7, 11, 15], 9], [0, 1]],
  [[[3, 2, 4], 6], [1, 2]],
  [[[3, 3], 6], [0, 1]],
  [[[-1, 5, 8, -3], 5], [2, 3]],
];

for (const [input, expected] of tests) {
  const got = twoSum(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
