// JS Concept 1: var / let / const
//
// Har experiment ke neeche "Mera guess:" likho, PHIR run karo:
//   node 01_var_let_const.js
// Guess galat ho to koi baat nahi, wahi seekhna hai.

// ---- Helper (don't edit): error aaye to bhi file chalti rahe ----
function run(name, fn) {
  try {
    fn();
  } catch (err) {
    console.log("   ERROR:", err.constructor.name, "-", err.message);
  }
}

// =====================================================================
// Experiment 1: let ki value badal sakte hain?
// =====================================================================
console.log("\n--- Experiment 1 ---");
run("1", () => {
  let score = 10;
  score = 20;
  console.log("   score =", score);
});
// Mera guess:

// =====================================================================
// Experiment 2: const ki value badal sakte hain?
// =====================================================================
console.log("\n--- Experiment 2 ---");
run("2", () => {
  const pi = 3.14;
  pi = 5;
  console.log("   pi =", pi);
});
// Mera guess:

// =====================================================================
// Experiment 3: if { } ke andar banaya, bahar dikhega?
// =====================================================================
console.log("\n--- Experiment 3a: var ---");
run("3a", () => {
  if (true) {
    var a = "var wala";
  }
  console.log("   a =", a);
});
// Mera guess:

console.log("\n--- Experiment 3b: let ---");
run("3b", () => {
  if (true) {
    let b = "let wala";
  }
  console.log("   b =", b);
});
// Mera guess:

// =====================================================================
// Experiment 4: banane se PEHLE use kiya to?
// =====================================================================
console.log("\n--- Experiment 4a: var ---");
run("4a", () => {
  console.log("   x =", x);
  var x = 5;
});
// Mera guess:

console.log("\n--- Experiment 4b: let ---");
run("4b", () => {
  console.log("   y =", y);
  let y = 5;
});
// Mera guess:
