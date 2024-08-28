// Approach - Without Using Nested Loops

// Time Complexity - O(2n) -> O(n)
// Space Complexity - O(1)

const exclusiveSum = (...nums: Array<number>) => {
  const res: Array<Number> = [];
   let sum :number = 0;
    for (let el of nums)
    {
        sum += el;
    }

    for (let el of nums)
    {
        res.push(sum - el);
    }
    
    return res;
};

console.log(exclusiveSum(1,3,4,2));