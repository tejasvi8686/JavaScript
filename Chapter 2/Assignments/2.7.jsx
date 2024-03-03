/*Create two variables grade and passingYear.Check if your grade == "A" and passingYear < 2020 with the help of ternary operator(Not allowed to use any logical operator).If both condition true print on console Qualify. Otherwise Fail */

let grade = "A";
let passingYear = 2019;

let result = (grade === "A") ? (passingYear < 2020 ? "Qualify" : "Fail") : "Fail";

console.log(result);
