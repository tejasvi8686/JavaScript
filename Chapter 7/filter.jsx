// array Methods

// filter Methods (used to perform filteration on array)

let gift = ["watch", "Ring", "Cholates", "Teddy-Bear", "Watches"];

let filterArray = gift.filter((gift) => {
  if (gift == "watch" || gift == "Ring") {
    return gift;
  }
});

// it return "new" array

console.log(filterArray);

console.log(gift);


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(ages);
;console.log(result);
