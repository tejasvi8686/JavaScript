/*singleton*/ // const tinderUser = new Object()

/*Non singleton*/ const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "tejasvi",
      lastename: "raj",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname);

// console.log(regularUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 3: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign( {}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const users = [
  {
    id: 1,
    email: "t@12gmail.com",
  },
  {
    id: 2,
    email: "t@123gmail.com",
  },
  {
    id: 3,
    email: "t@1234gmail.com",
  },
];

console.log(users[1].email);
console.log(tinderUser);

// keys return only the keys.
console.log(Object.keys(tinderUser));

// values return only the values .
console.log(Object.values(tinderUser));

// entries retutrn both key and value .
console.log(Object.entries(tinderUser));

//hasOwnPropery retun the boolean values is it available or not .
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursesname: "js in hindi",
  price: "999",
  courseInstructor: "tejasviraj",
};

//console.courseInstructor

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);


