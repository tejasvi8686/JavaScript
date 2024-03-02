// "if " "else", "elseif", statment

let budget = 6000;

if (budget < 6000) {
  console.log("will do dinner in 5 star hotel");
} else if (budget > 4500) {
  console.log("will do dinnner in 3 star");
} else if (budget > 3000) {
  console.log("will do dinner 2 star hotel");
} else {
  console.log("run if " + "all" + "condition is flase");
}

// after the first condtion is true all the condtion is rejected and f=get out of the scope
console.log("I am outside of block");


//nested-if statement

let num= 23;

if (num > 22){
    console.log("Run if 1st conditions true");
    if(num > 21){
        console.log("run if both conditions true");
    }
}
