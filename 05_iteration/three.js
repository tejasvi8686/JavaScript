// for of


// ["", "", ""]
// [{}, {}, {}]

// for of loop print {both key and } value
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

// const greetings = "hello world!";

// for (const greet of greetings) {
//   if (greet === " ") {
//     break;
//   }
//   console.log(`Each char is ${greet}`);
// }

// map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("In", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
} 

const myObject = {
  game: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }


