function reverseString (str) {
    let reversed = ""

    for (let i = str.length-1; i >= 0; i-- ){

      //  i =  
        reversed = reversed+str[i]
      
        
    }

    return reversed
}

reverseString("hello")
//console.log(reverseString("hello"));


function countLetter(str, letter) {

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter){
        result = result + 1
    }
  }

  return result

}


console.log(countLetter("banana" , "a"));
console.log(countLetter("hello", "l"));   // 2 aana chahiye




function reverseNumber (num) {

  let str = String(num)
  let result = ""

  for (let i = str.length-1; i >= 0; i-- ) {
    result = result+str[i]
  }
  

  return Number(result)


}

console.log(reverseNumber(123456));
console.log(reverseNumber(500));



function countLetter2(str, letter) {
  // yahan code likho

  let str2 = String(str)
  let result = 0

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === letter) {
      result = result + 1
    }
  }
  return result

}

console.log(countLetter2("banana", "a"));   // 3 aana chahiye
console.log(countLetter2("hello", "l"));    // 2 aana chahiye
