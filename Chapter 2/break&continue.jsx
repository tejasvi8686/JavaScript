// break and continue and statement

// also called jump stament

// continue stament

// used to skip some values of loop

// for (let i = 1; i <= 10; i++) {
//   if (i == 2) {
//     continue; // move towards the next iteration
//   }
//   console.log("value of i ", i);
// }

// braek statemnt

// used to teminate the loop control from outside

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("our disred the value is", i);
    break;
  }
  console.log("value of i =", i);
}

console.log("Now i am outside of  the loop scope");
