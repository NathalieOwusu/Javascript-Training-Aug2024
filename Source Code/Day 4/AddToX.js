/*
Create a function addingtoX that accepts a number as an argument.
  It will return the sum of every integer from 1 up to and including the input number.

  Examples:
  addingToX(0); // will return 0
  addingToX(1); // will return 1
  addingToX(5); // will return 15

  Then, create a function arrayToX that accepts a number as an argument.
  It will return an array where each element is the return value of calling addingToX
  on each integer from 1 up to and including the input number.

  Examples:
  arrayToX(1); // will return [1]
  arrayToX(3); // will return [1, 3, 6]
  arrayToX(5); // will return [1, 3, 6, 10, 15]
*/


const addingToX = (num) => {

    let sum = 0;

    for (let i = 1; i <= num; i++)
    {
        sum += i;
    }
    return sum;
    
}

const arrayToX = (num) => {

    const arr = [];

    for (let i = 0; i < num; i++)
    {
        arr[i] = addingToX(i);
    }

    return arr;
    
}


console.log(arrayToX(1));
console.log(arrayToX(3));