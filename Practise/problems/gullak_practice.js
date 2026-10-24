// Gullak Practice: loop over an array/string and build ONE answer
//
// Every problem here uses the same 4 steps:
//   1. Make the gullak (let total = 0  /  let result = ""  /  let result = [])
//   2. Loop:  for (let i = 0; i < arr.length; i++)
//   3. Update the gullak inside the loop (total = total + arr[i], result.push(...), ...)
//   4. return the gullak
//
// Before writing code, ask yourself:
//   - What starts in the gullak? 0, "" or [] ?
//   - Do I add EVERY item, or only some? (then you need an if)
//
// Run: node gullak_practice.js

// ---- Test helper (don't edit) ----
function check(name, got, expected) {
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  console.log(
    pass ? "PASS" : "FAIL",
    name,
    pass
      ? ""
      : `-> got ${JSON.stringify(got)}, expected ${JSON.stringify(expected)}`,
  );
}

// =====================================================================
// PART A: Number gullak (start with 0)
// =====================================================================

// A1: Multiply all numbers together.
// productArray([2, 3, 4]) -> 24
// Careful: what should the gullak start with? 0 * anything = 0 ...
function productArray(arr) {
  // Write your code here
  let gullak = 1;

  for (let i = 0; i < arr.length; i++) {
    gullak = gullak * arr[i];
  }

  return gullak;
}

check("A1. productArray", productArray([2, 3, 4]), 24);
check("A1. productArray", productArray([5]), 5);

// A2: Count how many numbers are bigger than 10.
// countBig([5, 12, 8, 20, 11]) -> 3
// Hint: add 1 to the gullak only IF the number is bigger than 10.
function countBig(arr) {
  // Write your code here

  let gullak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      gullak = gullak + 1;
    }
  }

  return gullak;
}
check("A2. countBig", countBig([5, 12, 8, 20, 11]), 3);
check("A2. countBig", countBig([1, 2]), 0);

// A3: Sum only the even numbers.
// sumEvens([1, 2, 3, 4, 5, 6]) -> 12   (2 + 4 + 6)
// Hint: you learned n % 2 in Problem 4.
function sumEvens(arr) {
  // Write your code here

  let sumEvens = 0;

  for (let i = 0; i < arr.length; i++) {
    // i = 0; 0 < 5; 1;
    // i = 1; 1 < 5; 2;
    // i = 2; 2 < 5; 3;
    // i = 3; 3 < 5; 4;
    // i = 4: 4 < 5; 5;
    // i = 5: 5 < 5; // loop end
    if (arr[i] % 2 === 0) {
      sumEvens = sumEvens + arr[i];
    }
  }

  return sumEvens;
}
check("A3. sumEvens", sumEvens([1, 2, 3, 4, 5, 6]), 12);
check("A3. sumEvens", sumEvens([1, 3, 5]), 0);

// A4: Average of the numbers.
// average([10, 20, 30]) -> 20
// Hint: first find the sum (Problem 9), then divide by arr.length.
function average(arr) {
  // Write your code here

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    
    
  }

  return sum / arr.length
}
check("A4. average", average([10, 20, 30]), 20);
check("A4. average", average([1, 2]), 1.5);

// A5: Find the biggest number (don't use Math.max).
// findMax([3, 9, 2, 7]) -> 9
// Hint: start the gullak with the FIRST item (arr[0]), not 0.
//       Why? Try findMax([-5, -2, -9]) with 0 as the start.
function findMax(arr) {
  // Write your code here

  let max = arr[0];

  for( i = 0; i < arr.length; i++){
    if(arr[i] > max ){
       max= arr[i]
    }
  }

  return max
}
check("A5. findMax", findMax([3, 9, 2, 7]), 9);
check("A5. findMax", findMax([-5, -2, -9]), -2);

// =====================================================================
// PART B: String gullak (start with "")
// =====================================================================

// B1: Count the spaces in a sentence.
// countSpaces("I love JS") -> 2
// Hint: a space is " ". Answer is a number, so gullak starts with 0.
function countSpaces(str) {
  // Write your code here
}
check("B1. countSpaces", countSpaces("I love JS"), 2);
check("B1. countSpaces", countSpaces("hello"), 0);

// B2: Remove all spaces.
// removeSpaces("I love JS") -> "IloveJS"
// Hint: add a letter to the gullak only IF it is not a space (!==).
function removeSpaces(str) {
  // Write your code here
}
check("B2. removeSpaces", removeSpaces("I love JS"), "IloveJS");
check("B2. removeSpaces", removeSpaces(" a b "), "ab");

// B3: Repeat every letter twice.
// doubleLetters("abc") -> "aabbcc"
function doubleLetters(str) {
  // Write your code here
}
check("B3. doubleLetters", doubleLetters("abc"), "aabbcc");
check("B3. doubleLetters", doubleLetters(""), "");

// B4: Join words with a dash (don't use .join).
// joinWithDash(["a", "b", "c"]) -> "a-b-c"
// Careful: no dash after the LAST word. How do you know it's the last one?
function joinWithDash(arr) {
  // Write your code here
}
check("B4. joinWithDash", joinWithDash(["a", "b", "c"]), "a-b-c");
check("B4. joinWithDash", joinWithDash(["hi"]), "hi");

// =====================================================================
// PART C: Array gullak (start with [])
// =====================================================================

// C1: Double every number.
// doubleAll([1, 2, 3]) -> [2, 4, 6]
function doubleAll(arr) {
  // Write your code here
}
check("C1. doubleAll", doubleAll([1, 2, 3]), [2, 4, 6]);

// C2: Keep only the positive numbers.
// onlyPositive([-1, 4, 0, -7, 9]) -> [4, 9]
// Is 0 positive? No.
function onlyPositive(arr) {
  // Write your code here
}
check("C2. onlyPositive", onlyPositive([-1, 4, 0, -7, 9]), [4, 9]);

// C3: Length of every word.
// wordLengths(["hi", "hello", "a"]) -> [2, 5, 1]
// Hint: arr[i] is a word, so arr[i].length is its length.
function wordLengths(arr) {
  // Write your code here
}
check("C3. wordLengths", wordLengths(["hi", "hello", "a"]), [2, 5, 1]);

// C4: Running total: each item is the sum so far.
// runningTotal([1, 2, 3, 4]) -> [1, 3, 6, 10]
// Hint: you need TWO gullaks: a number (sum so far) and an array (answer).
function runningTotal(arr) {
  // Write your code here
}
check("C4. runningTotal", runningTotal([1, 2, 3, 4]), [1, 3, 6, 10]);
check("C4. runningTotal", runningTotal([5]), [5]);
