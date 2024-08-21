// Random Function

// This will give us a decimal between 0 and 1

let x = Math.random();
console.log(x)

// To get a value between 0 and 9, we can multiply it by 10 and get the floor value

x = Math.floor(Math.random() * 10);
console.log(x);

// To Get a value between 1 and 10, we can add 1 to it

x = Math.floor(Math.random() * 10 + 1);
console.log(x);


// To get a value between any two given numbers we can use the given formula

let max = 100, min = 1;

const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a);