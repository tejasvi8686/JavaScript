// this is mtlb current context ko refer kartsa hai

const user = {
  username: "Tejasvi",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = 'sam';
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "tejasvi";
//   console.log(this);
// }

// chai();

// const chai = function () {
//   let username = "tejasvi";
//   console.log(this.username);
// };

// chai()

// const chai = () => {
//     let username = "tejasvi";
//     console.log(this.username);
//   };

//   chai()

// basic arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(3, 4));

// arrow function

// implicit(man lena ki ek line ka return hai) return
// curly bracket use hua to return keyword likhna pade ga
// agar parenthis use hua to return keyword likna nahi pade ga

// const addTwos = (num1, num2) => num1 + num2;
// const addTwos = (num1, num2) => (num1 + num2);

// console.log(addTwos(3, 4));

const addTwo = (num1, num2) => ( { username: "tejasvi" });

console.log(addTwo(3, 4));
