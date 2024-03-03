/*use nested-if statement to check your age>18

than check your height height > 5.10.

If both true show any message(I can sit in exam) in the console?*/

let age = 20;
let height = 6.0; // Height is in feet

if (age > 18) {
  if (height > 5.10) {
    console.log("I can sit in the exam");
  } else {
    console.log("Height requirement not met.");
  }
} else {
  console.log("Age requirement not met.");
}
