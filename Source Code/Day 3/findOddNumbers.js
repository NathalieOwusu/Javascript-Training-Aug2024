/**
 * CHALLENGE 2
 * Create a function called `findOddNumbers` that takes one argument called
 * `numArray`, which is an array of numbers. When `findOddNumbers` is invoked
 * it will return a new array with all of the numbers that are odd.
 */

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// console.log(findOddNumbers([90013, 11801, 10012, 10006, 67001])); // => should return [90013, 11801, 67001]

// [1,2,3,4,5,6,7,8]        - 0 1 2 3 4 5 6 7 8

function findOddNumbers(numArray){
  let newArray=[];
  for (let i = 0; i < numArray.length; i++){
    if(numArray[i]% 2 !== 0){
      newArray.push(numArray[i]);
    } 
    }
    return newArray;
}
console.log(findOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    

// Rest Parameters

function findEvenNumbers(...numArray)
{

    const newArr = [];

  // Modified For Loop
    for (let el of numArray)
    {
        
        if (el % 2 == 0) {
            newArr.push(el);
        }
    }

    return newArr;

}

console.log(findEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14));



// What is the logic to check if a number is even or odd?