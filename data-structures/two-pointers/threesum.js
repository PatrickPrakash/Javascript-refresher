// 3 SUM

// Given an array of integers, nums, and an integer value, target, determine 
// if there are any three integers in nums whose sum is equal to the target,
// that is, nums[i] + nums[j] + nums[k] == target. Return TRUE 
// if three such integers exist in the array. Otherwise, return FALSE.

const threeSum = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 1; i++) {
        let low = i + 1;
        let high = nums.length - 1;
        while (low < high)
        {
            // If the calculated sum is greater than the target, decrement the high pointer
        let calculatedValue = nums[i] + nums[low] + nums[high];
        console.log(calculatedValue)
        if(calculatedValue == target) { return true}
       
        else if(calculatedValue > target)  {high--}
        // If the calculated sum is less than the target, increment the low pointer
        else if (calculatedValue < target) {low++ }
        }
        

    }
    return false;
}

console.log(threeSum([-1, 1, 0], -1));