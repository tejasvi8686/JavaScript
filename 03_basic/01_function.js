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
  if (!usernames) {
    console.log("please enter a username");
    return;
  }
  return `${usernames} just logged in`;
}

console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 4000));


// object
const user = {
  username: "tejasvi",
  price: "19999",
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// both way to print the passing like objects in console like arguments
// handleObject(user);
handleObject({
  username: "samhunt",
  price: 200,
});



// array
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 100]));
