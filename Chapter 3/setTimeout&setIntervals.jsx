// setTime and setIntervals 

// setTimeout -> function "once" after "intervals" of time

// setIntervals -> run function repeatedly,starting after the
// intervals of time.then repating.....

// setTimeout

//setTimeOut(fun|code, delay, arg1, arg2.....)


function greeting(name) {
    console.log(`welcome to coder ${name} dost family`);
}


setTimeout(greeting,5000, "raju");
setInterval(greeting,3000, "deepak")

