const nums = [1, 2, 3];

const sum = nums.reduce(function (accumulator, currentElement) {
  return accumulator + currentElement;
}, 0);

console.log(sum);

const prod = nums.reduce((accumulator, currentElement) => {
  return accumulator * currentElement;
}, 1);

console.log(prod);
