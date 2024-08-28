
// Approach - Linear Seach
// Time Complexity - O(n)
// Time Complexity - O(1)
const largestToSmallest = (...nums: Array<number>) => {
    
    let minValue: number = Number.MAX_VALUE;
    let maxValue: number = Number.MIN_VALUE;

    for (let i: number=0; i < nums.length;i++)
    {
        
        minValue = Math.min(minValue,nums[i] );
        maxValue = Math.max(maxValue,nums[i] );
    }

    return [minValue, maxValue];
    
}

console.log(largestToSmallest(16, -70, 122));
