/*Create function addition which takes two numbers as an argument And return the result of sum of two numbers

Important Note: In the function call you are not passing any parameter. You can modify function to achieve this.*/


function addition() {
    return function(x, y) {
        return x + y;
    };
}


const add = addition();
console.log(add(5, 3));
