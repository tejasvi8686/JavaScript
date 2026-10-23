// Experiment: backward loop ko apni aankhon se dekho
// Run: node experiment_backward.js

const str = "cat";

console.log("str.length =", str.length);
console.log("last seat  =", str.length - 1);

console.log("\n--- Experiment 1: i = 0 se shuru, i-- ---");
for (let i = 0; i >= str.length; i--) {
  console.log("i =", i); // kuch print hoga?
}
console.log("(loop khatam)");

console.log("\n--- Experiment 2: i = str.length - 1 se shuru, i-- ---");
for (let i = str.length - 1; i >= 0; i--) {
  console.log("i =", i, "| letter =", str[i]);
}
console.log("(loop khatam)");


// i =0  ; 0>=3 ; -1
            //false beausse 0 is not bigger no to 3 that u loop end 

//  i= 2 ; 2>= 0 ; 1
//console.log     i = 2 and str[t]
//console.log     i = 1 and str[a] 
//console.log     i = 0 and str[c]     