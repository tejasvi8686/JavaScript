// if

const isUserloggedIn = true;
const temprature = 141;

// if (temprature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temprature is grater than 50");
// }

// console.log("excuted");

// <. > <= , >= , ==, !=, ===, !==

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`user poewer : ${power}`);
}

// console.log(`user power: ${power}`);

const balance = 1000;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// when && came both statment should be true

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

// when OR 

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Loged IN");
}
