/**
 * @param {number[]} nums
 * @return {boolean}
 */

// <========== Solution-1 ===============>
var containsDuplicate = function(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
};

// <========== Solution-2 ===============>
var containsDuplicate = function(nums) {
    const numsObj = {};
    for(let num of nums) {
      if(numsObj[num]) {
           return true;
       }
        else numsObj[num] = 1;
     }
    return false;
};
