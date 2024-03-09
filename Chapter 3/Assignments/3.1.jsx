/* Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place. Based on this input function should return a String with this format.

My state population is ** Its traditional food is ** and historical place name is */


// function declartion

function describeYourState(population, traditionalFood, historicalPlace) {
    return `My state population is ${population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}.`;
}

// Example usage:
const description = describeYourState("10 million", "sushi", "Kyoto");
console.log(description);

