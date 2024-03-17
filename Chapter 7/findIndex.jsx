// array methods 

// findIndex methos

// exection function for each array element
// It return "index" of that array element who "first " pass the 
// test "otherwise" -1

let ages = [11, 12, 10, 7, 3];

let result = ages.findIndex(age => {
    return age > 15
})

console.log("Index of required age =" , result);