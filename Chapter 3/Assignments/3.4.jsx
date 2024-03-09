/*Identify which type of value passed below into the function greet(). What will be the return value of greet ?*/

let person = {
    name: 'john',
  
    age: 25,
  };
  
  function greet(person) {
    person.name = `Mr ${person.name}`;
  
    return `Welcome ${person.name}`;
  }
  
  greet(person);