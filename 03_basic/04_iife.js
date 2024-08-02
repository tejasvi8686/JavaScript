// Immediately Invoked function expression

// Avoid polluting the global namespace
// Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(function chai() {
  console.log(`DB CONNECTED`);
})();



((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('tejasvi');

