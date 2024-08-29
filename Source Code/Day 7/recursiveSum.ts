// Time Complexity - O(n)
// Space Complexity (Recursion Stack ) -O(n)

const recursiveSum = (i: number, sum: Array<number>, nums: Array<number>) =>
{

    if (i == nums.length)
        return;

    sum[0] += nums[i];

    recursiveSum(i + 1, sum, nums);

}
const sum: Array<number> = [0];
const i: number = 0;
const nums = [1, 2, 3, 4, 5, 6];
recursiveSum(0, sum, nums);
console.log(sum[0]);