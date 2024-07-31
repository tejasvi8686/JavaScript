// object literals 

const JsUser = {
    name : 'Tejasvi',
    age : 23,
    location: "jaipur",
    email: "tejasviraj8686@gmail.com",
    isLoggedIn: false, 
    lastLoginDays : ["Monday", "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);


JsUser.email = "tejasviraj8686@chatgpt.com",
// Object.freeze(JsUser)
JsUser.email = "tejasviraj8686@micosoft.com"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
JsUser.greetingTwo()


