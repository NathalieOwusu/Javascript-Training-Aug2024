// Arrow Functions

const findAverage = (...arr) => {

    let sum = 0;

    for (const num of arr)
    {
        sum += num;
    }

    return sum / arr.length;
    
}

console.log(findAverage(1, 2, 3, 4, 5, 6));


// Implicit return
const subtract = (a, b) => a - b;
const add = (a, b) => a + b;

console.log(subtract(5,3))
console.log(add(5, 6))


// Implicitly Returning An Object

const createObj = (userName) => ({

    name: userName,
    age:28
    
});

console.log(createObj("Oliver Queen"));


