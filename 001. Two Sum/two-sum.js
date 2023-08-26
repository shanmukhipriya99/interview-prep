/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// <========== Solution-1 ===============>
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] == target) {
                result.push(i);
                result.push(j);
                break;
            }
        }
    return result;
};

// <========== Solution-2 ===============>
var twoSum = function(nums, target) {
    const numMap = new Map();  // create a new map
    for(let i=0; i<nums.length;i++) { 
        if(numMap.has(target - nums[i])) { // check if the numMap has: diff = target - nums[i]
          // we are checking in numMap and not directly in nums[] for edge cases like [3,2,4]
            return [numMap.get(target - nums[i]), i];
        }
        numMap.set(nums[i], i);
    }
};
