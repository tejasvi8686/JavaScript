let dishes = ["Biryani", "channy", "Karahai","Bhallay"]

// using fot loop

for (let i=0; i<dishes.length; i++){
    console.log(dishes[i]);
}


// using foreach method

dishes.forEach(function(element){
    console.log(element);
})

// object inside array

let blocklist = [{userName: "jhon", reason: "Abusive content"}, {userName: "paul", reason: "copyright issue"}]

console.log(blocklist);


for (let i=0; i<blocklist.length; i++){
    console.log(blocklist[i]);
}