// Function to capitalize the first word of a string
function firstUpperCaseWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Higher-order function transformer
  function transformer(str, transformFunction) {
    return transformFunction(str);
  }
  
  // Example usage
  let inputString = "hello world";
  let transformedString = transformer(inputString, firstUpperCaseWord);
  console.log(transformedString); // Output: "Hello world"
  