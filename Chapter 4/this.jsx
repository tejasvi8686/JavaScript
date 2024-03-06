// this key word

// in Each method we have an acess of specioal keyword called
// "this"

// this keyword represent the object "calling the method"

// in which this is present

// example

let person = {
  firstName: "tejasvi",
  lastName: "raj",
  city: "ghazipur",
  birthyear: "2000",
  education: "Full stack  developer",

  getSummary: function () {
    return `${this.firstName} ${this.lastName} lives in ${this.city} and ${this.birthyear} and he is ${this.education}`;
  },
};

console.log(person.getSummary());

// step 1 check in which method we use "this" keyword
// step 2 owner of that method(who is calling those method)

