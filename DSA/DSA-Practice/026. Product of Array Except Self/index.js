/**
 * @param {number[]} nums
 * @return {number[]}
 */

// <========== Solution-1 ===============>
var productExceptSelf = function(nums) {
    let prefix = [];
    let suffix = [];
  // forward loop
    for(let i = 0; i < nums.length; i++) {
        if (i===0) {
            prefix[i] = 1;
        } else {
            prefix[i]= prefix[i-1] * nums[i-1];
        }
    }
  // backward loop
    for(let i = nums.length - 1; i>=0; i--) {
        if(i === nums.length - 1) {
            suffix[i] = 1;
        } else {
            suffix[i] = suffix[i+1] * nums[i+1];
        }
    }
    let result = [];
  // final loop
    for (let i=0;i<nums.length;i++) {
        result[i] = prefix[i]*suffix[i];
    }
    return result;
};

// <========== Solution-2 ===============>

var productExceptSelf = function(nums) {
    let result = [];
    let prefix = 1;
    let suffix = 1;
  // forward loop
    for(let i=0; i<nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
  // backward loop
    for(let i=nums.length-1; i>=0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
};
