/** 
 * CHALLENGE 3
 * Our design team wants to get more attraction to our page and decided to
 * experiment with the title of our page. We want to capitalized the first
 * three characters of each title.
 * Create a function `capitalizeThreeLetters` that takes in one parameter,
 * a string representation of a word, and outputs the same string with the
 * first three characters capitalized.
 */

function capitalizeThreeLetters(word){
  let firstThreeLetters=word.slice(0,3).toUpperCase();
  let restOfTheString=word.slice(3);
  return firstThreeLetters + restOfTheString;
}

console.log(capitalizeThreeLetters("nathalie"))