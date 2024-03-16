// array method

// map method

/// create new array from original array by appling  
// transform function

let salries = [3000, 5000, 8000, 9000]

let newSalries = salries.map(salary => {
    let incrementedAmount = salary/2;
    return salary + incrementedAmount
})



console.log("After 50% increment New", newSalries);