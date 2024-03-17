// array method 

// reduce method 

// run reducer function for eacj array elemet 
// aray.reduce(function using reduce method)
//it return single value

// sum of all elements using reduces method

let num = [1,5,8,3,9,4];

let sum = num.reduce(function(total, currentValue){
    return total + currentValue
}, 0)

console.log(sum);


/// does not mutate original array
console.log(num);