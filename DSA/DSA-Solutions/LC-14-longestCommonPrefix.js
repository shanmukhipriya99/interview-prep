// ✅ Problem: Longest Common Prefix
// 🔗 Link: https://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// 🔒 Constraints:
// - 1 <= strs.length <= 200
// - 0 <= strs[i].length <= 200
// - strs[i] consists of only lowercase English letters if it is non-empty.

// 🔍 Approaches:

// ✅ Approach 1 – Nested Loop (Character by Character)
// - Use the first string as the base.
// - For each character in the first string, check that all other strings
//   have the same character at that index.
// - If mismatch or string is shorter, return prefix so far.
// - This is an explicit and readable approach.

// ✅ Approach 2 – Functional (Using Array.every())
// - Same logic as Approach 1 but using `strs.every()` to make it concise.
// - For each index, check if all strings have the same character using a predicate.
// - If true, append to prefix; else, break.

// ⏱️ Time Complexity: O(n * m)
// - n = number of strings
// - m = length of the shortest string (or common prefix)

// 🧠 Space Complexity: O(1) auxiliary (excluding output string)
// - The only extra space used is for the `prefix` string (output), so technically O(m).

// ⚠️ Edge Cases:
// - Empty input array → return ""
// - Only one string → return that string
// - One or more empty strings → return ""
// - No common prefix → return ""
// - All strings are identical → return the entire string

// ✅ Approach 1 – Explicit Nested Loop
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};

// ✅ Approach 2 – Functional Using every()
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else break;
  }
  return prefix;
};
