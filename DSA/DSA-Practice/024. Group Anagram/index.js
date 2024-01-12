/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// <========== Solution-1 ===============>
var groupAnagrams = function(strs) {
    const newMap = new Map();
    for(let str of strs) {
      // any string with the same alphabet are captured
        const key = str.split('').sort().join('');
        if(newMap.has(key)) {
          // all strings with the same alphabets are stored in an array
            newMap.get(key).push(str);
        } else {
          // else, we create a new array and add this string to it
            newMap.set(key, [str]);
        }
    }
  // We use the spread operator to get all the arrays from the map and display in the final array
    return [...newMap.values()];
};

// <========== Solution-2 ===============>
var groupAnagrams = function(strs) {
    const strObj = {};
    for(let str of strs) {
        const key = str.split('').sort().join('');
        if(strObj[key]) {
            strObj[key].push(str);
        } else {
            strObj[key] = [str];
        }
    }
    return Object.values(strObj); // returns an array, so don't need the spread operator
};
