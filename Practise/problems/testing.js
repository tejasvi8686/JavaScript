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

  for (i = 0; i < str.length; i++) {
    if (str[i] === "a"){
        result = result + 1
    }
  }

  return result

}


console.log(countLetter("banana" , "a"));
