// Question 4: Beginner JavaScript Practice
//
// You have an array of student marks.
// Write JavaScript code to:
// 1. Print all marks one by one.
// 2. Find the total marks.
// 3. Find the average marks.
// 4. Print "Pass" if the average is 40 or more, otherwise print "Fail".
//
// Expected output:
// Mark: 45
// Mark: 67
// Mark: 89
// Mark: 32
// Mark: 56
// Total marks: 289
// Average marks: 57.8
// Result: Pass

const marks = [45, 67, 89, 32, 56];

// Write your code below

let total = 0;

for (const mark of marks) {
  console.log(`Mark: ${mark}`);
  total += mark;
}

const average = total / marks.length;
const result = average >= 40 ? "Pass" : "Fail";

console.log(`Total marks: ${total}`);
console.log(`Average marks: ${average}`);
console.log(`Result: ${result}`);



const name = "tejasvi"