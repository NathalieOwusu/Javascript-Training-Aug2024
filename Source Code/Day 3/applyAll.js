


/**
 * CHALLENGE 4
 * Create a function `applyAll` that takes an array and a callback as arguments.
 * `applyAll` will return a new array where each element from the original array
 * will have had the callback applied to it.
 */

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// console.log(applyAll(['mai', 'brian', 'jeho', 'han'], capitalizeThreeLetters)); // => should return ['MAI', 'BRIan', 'JEHo', 'HAN']




function capitalizeThreeLetters(word)
{

    const capitalisedThreeLetters = word.substring(0, 3).toUpperCase();
    const restOfTheWord = word.substring(3);

    return capitalisedThreeLetters + restOfTheWord;

}
function applyAll(words, capitalizeThreeLetters) {

    const newArr = [];
    for (const word of words)
    {
        newArr.push(capitalizeThreeLetters(word));

    }


    return newArr;
    
}

console.log(applyAll(['mai', 'brian', 'jeho', 'han'], capitalizeThreeLetters));