//It is ued in compative of "conditional" statment

let currentdate = new Date();

// let weekday= currentdate.getday() //0 to 6

let age = 1;

switch(age) {
    case 15:
    case 16:
    case 17:

    result = "these ages are allowed to sit in the exam";
    break;

    default:
        result ="not allowed"
}

// if ther is no break statment than "next" case will be exceuted

console.log(result);