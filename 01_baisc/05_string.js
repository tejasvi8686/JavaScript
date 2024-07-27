const name = "tejasvi";
const repoCount = 50;

console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("tejasvi-raj-srivastava");

//console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

// in slice using negative value
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20tejasvi";

// replace start to check presenet and last to remove
console.log(url.replace("%20", "-"));


// includes check the string item present or not retun the value in true or false
console.log(url.includes("tejasvi"));
console.log(url.includes("raju"));


console.log(gameName.split("-"));