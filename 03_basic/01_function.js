function sayName() {
  console.log("T");
  console.log("I");
  console.log("J");
  console.log("A");
  console.log("S");
}

// sayName()

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(addTwoNumbers(3, 4));

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addTwoNumbers(3, 5);

console.log("Result:", result);

// true converts false
// false converts true

function loginUserMessage(usernames = "sam") {
  if(!usernames) {
    console.log("please enter a username");
    return;
  }
  return `${usernames} just logged in`;
}

console.log(loginUserMessage());
