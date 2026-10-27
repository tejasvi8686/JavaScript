// Loops Practice: forward loop, backward loop, index, building a result
//
// Problems go from very easy to harder. Solve them in order.
// Write your code inside each function, then run:
//   node loops_practice.js
//
// Each problem prints PASS or FAIL. Unsolved problems show FAIL, that's fine.
// Tip: if stuck, put console.log(i) inside your loop to see what's happening.

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
// LEVEL 1: Counting (aage aur peeche ginti)
// =====================================================================

// Problem 1: Return numbers from 1 to n.
// countUp(5) -> [1, 2, 3, 4, 5]
// Hint: start an empty array, loop forward (i++), push each i.
function countUp(n) {
  // Write your code here

  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}
check("1. countUp", countUp(5), [1, 2, 3, 4, 5]);

// Problem 2: Return numbers from n down to 1.
// countDown(5) -> [5, 4, 3, 2, 1]
// Hint: start at n, use i--. When should the loop stop?
function countDown(n) {
  // Write your code here

  let answer = [];

  for (let i = n; i >= 1; i--) {
    answer.push(i);
  }

  return answer;
}
check("2. countDown", countDown(5), [5, 4, 3, 2, 1]);

// Problem 3: Return numbers from n down to 0 (include 0 this time).
// countDownToZero(4) -> [4, 3, 2, 1, 0]
// Hint: only the stopping condition changes from Problem 2.
function countDownToZero(n) {
  // Write your code here

  let result = [];

  for (let i = n; i >= 0; i--) {
    result.push(i);
  }

  return result;
}
check("3. countDownToZero", countDownToZero(4), [4, 3, 2, 1, 0]);

// Problem 4: Return even numbers from n down to 2.
// evensBackward(10) -> [10, 8, 6, 4, 2]
// Hint: i-- subtracts 1. How do you subtract 2? (i = i - 2)
function evensBackward(n) {
  // Write your code here

  let findevenumber = [];

  let start = n;

  if (n % 2 === 1) {
    start = n - 1;
  }

  for (let i = start; i >= 2; i = i - 2) {
    findevenumber.push(i);
  }

  return findevenumber;
}
check("4. evensBackward", evensBackward(9), [8, 6, 4, 2]);

// =====================================================================
// LEVEL 2: Index (seat number) se letter nikalna
// =====================================================================

// Problem 5: Return the last character of a string.
// lastChar("hello") -> "o"
// Hint: no loop needed. Last index = str.length - 1
function lastChar(str) {
  // Write your code here

  return str[str.length - 1];
}
check("5. lastChar", lastChar("hello"), "o");

// Problem 6: Return every letter in an array, front to back.
// lettersForward("cat") -> ["c", "a", "t"]
// Hint: loop i = 0 up to str.length - 1, push str[i].
function lettersForward(str) {
  // Write your code here

  let result = [];

  for (let i = 0; i <= str.length - 1; i++) {
    result.push(str[i]);
  }

  return result;
}
check("6. lettersForward", lettersForward("cat"), ["c", "a", "t"]);

// Problem 7: Return every letter in an array, back to front.
// lettersBackward("cat") -> ["t", "a", "c"]
// Hint: same as Problem 6, but loop backward.
function lettersBackward(str) {
  // Write your code here

  let result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result;
}
check("7. lettersBackward", lettersBackward("cat"), ["t", "a", "c"]);

// Problem 8: Return every second letter, starting from the first.
// everyOther("abcdef") -> "ace"
// Hint: loop forward but jump by 2 (i = i + 2). Build a string.
function everyOther(str) {
  // Write your code here

  let result = "";

  for (let i = 0; i < str.length; i=i + 2) {
   result = result+str[i];
  }

  return result;
}
check("8. everyOther", everyOther("abcdef"), "ace");

// =====================================================================
// LEVEL 3: Building a result (gullak pattern: result = result + something)
// =====================================================================

// Problem 9: Return the sum of all numbers in an array.
// sumArray([1, 2, 3, 4]) -> 10
// Hint: let total = 0; then total = total + arr[i]
function sumArray(arr) {
  // Write your code here

  let total = 0;

  for(let i = 0; i < arr.length; i++){
    total = total+arr[i]
  }

  return total;
}
check("9. sumArray", sumArray([1, 2, 3, 4]), 10);

// Problem 10: Join an array of letters into one string.
// joinLetters(["h", "i", "!"]) -> "hi!"
// Hint: let result = ""; then result = result + arr[i]  (don't use .join)
function joinLetters(arr) {
  // Write your code here
  
  let result = "";

  for (let i = 0; i < arr.length; i++){
    result = result+arr[i]
  }

  return result;

}
check("10. joinLetters", joinLetters(["h", "i", "!"]), "hi!");

// Problem 11: Reverse a string (same as 01_reverseString.js, from memory!).
// reverseString("hello") -> "olleh"
function reverseString(str) {
  // Write your code here
  
  let result = "";

  for (let i = str.length - 1; i >= 0; i--){
        result = result + str[i];
  }

  return result;

}
check("11. reverseString", reverseString("hello"), "olleh");
check("11. reverseString", reverseString("abc"), "cba");

// Problem 12: Reverse an array into a NEW array (don't use .reverse).
// reverseArray([1, 2, 3]) -> [3, 2, 1]
// Hint: same idea as Problem 11, but push into an array instead of a string.
function reverseArray(arr) {
  // Write your code here

  let reverse = [];

  for (let i = arr.length-1; i >= 0; i--){
    reverse.push(arr[i])
  }

  return reverse;
}
check("12. reverseArray", reverseArray([1, 2, 3]), [3, 2, 1]);
check("12. reverseArray", reverseArray(["a", "b"]), ["b", "a"]);

// Problem 13: Count how many times a letter appears in a string.
// countLetter("banana", "a") -> 3
// Hint: let count = 0; if str[i] === letter, count = count + 1
function countLetter(str, letter) {
  // Write your code here

  let count = 0;

  for ( let i = 0; i < str.length; i++){
    if (str[i] === letter){
      count = count + 1
    }
  }

  return count;


}
check("13. countLetter", countLetter("banana", "a"), 3);
check("13. countLetter", countLetter("hello", "z"), 0);

// =====================================================================
// LEVEL 4: Challenge (use what you learned above)
// =====================================================================

// Problem 14: Is the word the same forwards and backwards?
// isPalindrome("madam") -> true,  isPalindrome("hello") -> false
// Hint: reverse it (Problem 11), then compare with the original.
function isPalindrome(word) {
  // Write your code here

  let reverse = "";

  for (let i = word.length-1; i >= 0; i--){
       reverse = reverse+word[i]
  }


  return reverse === word

}
check("14. isPalindrome", isPalindrome("madam"), true);
check("14. isPalindrome", isPalindrome("hello"), false);

// Problem 15: Reverse a number.
// reverseNumber(1234) -> 4321
// Hint: convert to a string with String(num), reverse it,
// then convert back with Number(...).
function reverseNumber(num) {
  // Write your code here

  let str = String(num)
  let reverse = ""

  for ( let i = str.length-1; i>=0; i--){
    reverse = reverse+str[i]
  }      

  return Number(reverse);

}
check("15. reverseNumber", reverseNumber(1234), 4321);
check("15. reverseNumber", reverseNumber(500), 5);

// Problem 16: Return only the letters at odd indexes, back to front.
// oddIndexBackward("abcdef") -> "fdb"   (indexes 5, 3, 1)
// Hint: start at the last odd index, jump back by 2.
// Careful: is str.length - 1 always odd?
function oddIndexBackward(str) {
  // Write your code here

  
}
check("16. oddIndexBackward", oddIndexBackward("abcdef"), "fdb");
check("16. oddIndexBackward", oddIndexBackward("abcde"), "db");
