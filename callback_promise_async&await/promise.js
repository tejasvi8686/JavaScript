//promise

// promise is for "eventual" completion of task . it is an object in jS
// it is solution to callback hell

// let promise = new Promise( (resolve, reject) => {...})

// promise has 3 state = {pending, fullfilled, rejected}


let promise = new Promise ((resolve , reject) => {
    console.log("I am a promise");
    reject("some error occurred")

    
    
})