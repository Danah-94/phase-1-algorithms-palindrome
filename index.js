function isPalindrome(word) {
  // Write your algorithm here

  let reverseWord = word.split("").reverse().join("");
  let result;

  if(word === reverseWord){
       result = true
  }else{
      result = false
  }

  return result
}

isPalindrome('abba');
isPalindrome('racecar');
isPalindrome('a');
isPalindrome('robot');
isPalindrome('ab');


/* 
  Add your pseudocode here
  1) Grab the string and place it in a variable (no need)
  2) Create another string that is the reverse of string
     - split the word into letters
     - reverse the letters
     - join the letters into word
  3) place reverse of string in a variable 
  4) compare original string with reversed string
  5) if original is the same as the reversed return true
  6) if not the same return false
*/

/*
  Add written explanation of your solution here

  Created a variable called reverseWord which I assigned to it 
*/

/*
  Instructions
  Write a function isPalindrome that will receive one argument, a string. 
  Your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), 
  and return false if it is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
