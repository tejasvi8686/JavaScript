// Problem 3: Largest and Second Largest (Easy)
//
// Return [largest, secondLargest] from an array of numbers.
// Don't use Math.max or sort. Loop through the array only once.
// If there is no second largest (all values equal), use null.
//
// findTopTwo([3, 9, 2, 7])  -> [9, 7]
// findTopTwo([5, 5, 5])     -> [5, null]
//
// Run: node 03_findMax.js

function findTopTwo(arr) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [[[3, 9, 2, 7]], [9, 7]],
  [[[1, 2]], [2, 1]],
  [[[-4, -1, -9]], [-1, -4]],
  [[[10, 10, 8]], [10, 8]],
  [[[5, 5, 5]], [5, null]],
];

for (const [input, expected] of tests) {
  const got = findTopTwo(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
