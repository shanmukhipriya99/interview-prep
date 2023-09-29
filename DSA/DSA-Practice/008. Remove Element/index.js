/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let newArr = nums.filter(num => num != val);
    for(let i = 0; i< newArr.length; i++) {
      nums[i] = newArr[i];
    }
    nums.length = newArr.length;
    return nums.length;
};
