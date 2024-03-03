/* Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food.

Write an if/else if statement to help john figure out Your country is right for him? */

let countryspeaksenglish = true;
let population = 8000000;
let haspanishfood = true;
let hasEnglishfood = true;

if (countryspeaksenglish && population < 10000000 && (haspanishfood || hasEnglishfood)){
    console.log("this country meets the jhon criteria");
}

else{
    console.log("this country does not meet all of the jhon's criteria");
}