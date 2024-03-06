// function vs method

let agecalculate = function(birthyear){
    let age = 2023 - birthyear
    console.log(`current age is = ${age}`);
}

agecalculate(2003)

// method > ---- it is nothing but object propery(key) holding
// function as "value"

let person = {
    agecalculate: function(birthyear = 2008){

        let age = 2023-birthyear;
        return age;
    }
}

console.log(`Current age is ${person.agecalculate(2003)}`);