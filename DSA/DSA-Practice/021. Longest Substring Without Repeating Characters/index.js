/**
 * @param {string} s
 * @return {number}
 */

// <======== Solution - 1 =================>

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length;
  }
  let max = 0;
  for (let l = 0, r = 1; r < s.length; r++) {
    let count = 0;
    for (let start = r - 1; start <= r && start >= l; start--) {
      if (s[start] === s[r]) {
        l = start + 1;
        break;
      }
      count++;
    }
    max = Math.max(max, count + 1);
  }
  return max;
};

// <======== Solution - 2 =================>

var lengthOfLongestSubstring = function (s) {
  let stringMap = new Map();
  let max = 0;
  for (let l = 0, r = 1; r < s.length; r++) {
    let count = 0;
    for (let start = r - 1; start <= r && start >= l; start--) {
      if (s[start] === s[r]) {
        l = start + 1;
        break;
      }
      count++;
    }
    max = Math.max(max, count + 1);
  }
  return max;
};

var lengthOfLongestSubstring = function(s) {
    let stringMap = new Map();
    let max = 0;
    for(let l=0, r=0; r<s.length; r++) {
        if(stringMap.has(s[r])) {
            l = Math.max(l, stringMap.get(s[r]) + 1);
        }
        stringMap.set(s[r], r);
        max = Math.max(max, r-l+1);
    }
    return max;
};
