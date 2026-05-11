const print = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray = [];
let sum = 0;

for (let i = 0; i < print.length; i++) {
  if (print[i] % 2 === 0) {
    evenArray.push(print[i]);
    sum += print[i];
  }
}

console.log("Even numbers:", evenArray);
console.log("Sum:", sum);
