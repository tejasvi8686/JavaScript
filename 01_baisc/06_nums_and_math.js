const score = 400;
// console.log(score);

const blance = new Number(100);
// console.log( blance);

console.log(blance.toString().length);
// console.log(blance.toFixed(2));

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));



// math.random() genrate new value between 0 and 1
console.log(Math.random());

console.log(Math.random() * 10 + 1);
// math.floor give a number in round of 4.3 = 4
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
