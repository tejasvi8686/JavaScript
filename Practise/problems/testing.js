function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    //  i =
    reversed = reversed + str[i];
  }

  return reversed;
}

reverseString("hello");
//console.log(reverseString("hello"));

function countLetter(str, letter) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result = result + 1;
    }
  }

  return result;
}

console.log(countLetter("banana", "a"));
console.log(countLetter("hello", "l")); // 2 aana chahiye

function reverseNumber(num) {
  let str = String(num);
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return Number(result);
}

console.log(reverseNumber(123456));
console.log(reverseNumber(500));

function countLetter2(str, letter) {
  // yahan code likho

  let str2 = String(str);
  let result = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === letter) {
      result = result + 1;
    }
  }
  return result;
}

console.log(countLetter2("banana", "a")); // 3 aana chahiye
console.log(countLetter2("hello", "l")); // 2 aana chahiye

// removeSpaces("I love JS") → "IloveJS"
function removeSpaces2(str) {
  let count = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count = count + str[i];
      console.log();
    }
  }

  return count;
}

console.log(removeSpaces2("I love JS")); // IloveJS aana chahiye
console.log(removeSpaces2(" a b ")); // ab aana chahiye

// joinWithDash(["a", "b", "c"]) → "a-b-c"
function joinWithDash2(arr) {

  let dashjoin = ""

  for (let i = 0; i < arr.length; i++) {
   

    if (i !== arr.length - 1) {
      dashjoin = dashjoin + "-"
    }

 
    dashjoin = dashjoin + arr[i]
  }

  return dashjoin

}

console.log(joinWithDash2(["a", "b", "c"]));  // a-b-c
console.log(joinWithDash2(["hi"]));           // hi