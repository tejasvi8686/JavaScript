// for loop

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= arr.length; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop value : ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Ineer loop value : ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// break and continue

// break is used for break the excution when it's find the exceution ;
// continue is used skip that number or excution where it's mention.

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Dected 5`);
        break;
    }
  console.log(`value of i is ${i}`);
}


