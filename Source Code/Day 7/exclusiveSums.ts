//

// Approach 1 - Nested Loops With Function 
// Time Complexity - O(n^2)
// Space Complexity - O(1)

const getSumOfRest = (el: number,nums: Array<number>) => {
  let sum: number = 0;
  for (let j: number = 0; j < nums.length; j++) {
    if (nums[j] == el) continue;

    sum += nums[j];
  }

  return sum;
};

const exclusiveSum = (nums: Array<number>) => {
  const sum: Array<Number> = [];
    for (let el of nums) {
      
        sum.push(getSumOfRest(el,nums));
    }
    
    return sum;
};

console.log(exclusiveSum([1,4,5,7]));
