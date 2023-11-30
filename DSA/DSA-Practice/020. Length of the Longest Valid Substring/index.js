/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function(word, forbidden) {
    // Can use the array as is, but searching in a Set is O(1)
    const forbiddenSet = new Set(forbidden);
    let max = 0;

    for (let l = 0, r = 0; r < word.length; r++) {
        for (let start = r; start >= l && r - start < 10; start--) {
            if(forbiddenSet.has(word.substring(start, r + 1))) {
                l = start + 1;
                break;
            }
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
};
