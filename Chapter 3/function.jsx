// function

// function nameOfFunction(){
//     console.log("you are running code present isn this");
// }

// //function call
// nameOfFunction();

// //function expression

// let fun = function () {
//     //also called anonymous function
//     console.log("this is an example function expression");
// }

// //calling function expression

// fun()

// // Real Example

// // passing values (arguments and parameter)

// let initation = function (name){
//     console.log(`welcome! ${name} you are iniviaed our event`);

// }

// initation("marie");
// initation("harry");

// returning values (how to return values from the function)

let ageCalculation = function (birthyear, currentYear = 2023) {
  let age = currentYear - birthyear;
  console.log(`your current age is = ${age}`);

  return age;
};
// console.log(ageCalculation(2000));

let functionResult = ageCalculation(2007)

console.log(`your age is = $`);
