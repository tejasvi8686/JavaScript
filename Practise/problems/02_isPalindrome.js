// Problem 2: Valid Palindrome (Easy)
//
// Return true if the string reads the same forwards and backwards.
// Ignore upper/lower case, spaces and punctuation.
//
// isPalindrome("racecar")                        -> true
// isPalindrome("A man, a plan, a canal: Panama") -> true
// isPalindrome("hello")                          -> false
//
// Bonus: solve it with two pointers (one from the start, one from the end)
// without creating a reversed copy.
//
// Run: node 02_isPalindrome.js

function isPalindrome(str) {
  // Write your code here
}

// ---- Tests (don't edit below) ----
const tests = [
  [["racecar"], true],
  [["A man, a plan, a canal: Panama"], true],
  [["hello"], false],
  [["No lemon, no melon"], true],
  [[""], true],
];

for (const [input, expected] of tests) {
  const got = isPalindrome(...input);
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(pass ? "PASS" : "FAIL", JSON.stringify(input), "->", JSON.stringify(got), pass ? "" : `(expected ${JSON.stringify(expected)})`);
}
