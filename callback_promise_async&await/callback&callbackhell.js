// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// // a callback is function as an argument to another function

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, sum);

// callback hell

// callbackhell : Nested callback stacked below one another forming a pyramid structure (pyramid of Doom)

// This style of programming becomes difficult to understand & manage

//nesting

function getDate(dataId, getNextDate) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextDate) {
      getNextDate();
    }
  }, 2000);
}


// callback hell
getDate(1, () => {
  getDate(2, () => {
    getDate(3, () => {
      getDate(4);
    });
  });
});
