// array

// shallow copy :- A shallow copy of an object is a copy whose properties share the same refrence (point to the same underlying values)
// Deep copy :- A deep copy of an object is a copy whose properties do not share the same refrence.



// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["shaktiman", "naagraj"];
// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);

                                           // array methods

// push method add the element in the last of the item in the array
// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.push(9)

// pop method is use to remove the element in the array of the last
//myArr.pop()

//unshift
// unshift method is used add the element in the array in the starting given the value which i want to add
// The unshift() method overwrites the original array.
//myArr.unshift(10)

// shift
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// myArr.shift()

// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// console.log(myArr.includes(9));

// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// console.log(myArr.indexOf(3));

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
// const newarr = myArr.join();
// console.log(myArr);
// console.log(typeof newarr);
// console.log(newarr);




// slice , splice
const myArr1 = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr1);

// not include last number in the argument
const myn1 = myArr1.slice(1, 3);
console.log("1",myn1);
console.log("B ", myArr1);

// spice  
//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.


const myn2 = myArr1.splice(1,3); 
console.log("2", myn2);
console.log("c ", myArr1);


