// Problem 5: Remove Duplicates (Easy)
//
// Return a new array with duplicates removed, keeping the first
// time each value appears, in the original order.
//
// removeDuplicates([1, 2, 2, 3, 1]) -> [1, 2, 3]
//
// Try it twice: once with a loop + object/Set, once in a single line.
// Interview follow-up: what is the time complexity of each version?
//
// Run: node 05_removeDuplicates.js

function removeDuplicates(arr) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [[[1, 2, 2, 3, 1]], [1, 2, 3]],
  [[["a", "b", "a", "c", "b"]], ["a", "b", "c"]],
  [[[4, 4, 4]], [4]],
  [[[]], []],
];

for (const [input, expected] of tests) {
  const got = removeDuplicates(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
