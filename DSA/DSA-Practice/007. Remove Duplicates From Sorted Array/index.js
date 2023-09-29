/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let newSet = new Set();
    for (const num of nums) {
      newSet.add(num);
    }
    const newNums = [...newSet];
    for(let i=0;i<newNums.length;i++){
      nums[i] = newNums[i];
    }
    nums.length = newNums.length;
    return nums.length;
};
