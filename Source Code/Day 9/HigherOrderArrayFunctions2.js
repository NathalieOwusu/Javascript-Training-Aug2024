// Array.Filter method - Loops through the entire array and displays those elements which satisfy the given condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr = nums.filter(function (element) {
  if (element % 2 == 0) return element;
});

console.log(arr);

const res = nums.filter((element) => element % 2 == 0);

console.log(res);

const data = [
  { name: "Anubhav", age: 28 },
  { name: "Mithilesh", age: 38 },
  { name: "Alexandar", age: 22 },
  { name: "John", age: 32 },
  { name: "Jason", age: 25 },
  { name: "Shubham", age: 21 },
  { name: "Mahesh", age: 18 },
];

console.log(data.filter((element) => element.age >= 20 && element.age <= 30));
