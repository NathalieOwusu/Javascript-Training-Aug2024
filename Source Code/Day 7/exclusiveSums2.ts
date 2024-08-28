// Approach 2 - Nested Loops Without Function
// Time Complexity - O(n^2)
// Space Complexity - O(1)
const exclusiveSum = (...nums: Array<number>) => {
  const res: Array<Number> = [];
   
    for (let i: number=0; i < nums.length; i++)
    {
        let sum: number = 0;
        for (let j: number = 0; j < nums.length; j++)
        {
            if (i == j)
                continue;

            sum += nums[j];

        }
        res.push(sum);

    }
    
    return res;
};

console.log(exclusiveSum(1,3,4,2));