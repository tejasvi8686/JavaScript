let a = 5;

let b = 7;

let c = 8;

let result = a < b > c;

console.log(result);

/*
 In JavaScript, the comparison operators < and > have left-to-right associativity. So the expression a < b > c is evaluated as (a < b) > c.

Let's break it down step by step:

a < b: This evaluates to true since 5 is less than 7.
true > c: Now we have true compared to 8.
When you compare a boolean value (true) with a number (8), JavaScript coerces the boolean value to a number. true is coerced to 1, so the expression becomes 1 > 8.
1 > 8 evaluates to false
*/