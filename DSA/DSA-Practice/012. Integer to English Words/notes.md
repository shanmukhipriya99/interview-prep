<================ Question ========================>

Convert a non-negative integer num to its English words representation.

Example 1:
Input: num = 123
Output: "One Hundred Twenty Three"

Example 2:
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Constraints:

- 0 <= num <= 231 - 1

<=========================== Notes =============================>

## Understanding the problem:
Given an integer, we need to return its English words representation.

## Approach - 1
The function numberToWords converts a given number into its English word representation. 
The approach is recursive, breaking down the number into smaller parts based on the magnitude (Billion, Million, Thousand, Hundred, etc.). It uses a map (numsMap) to store the English word representation 
of numbers from 1 to 19 and the tens from 20 to 90. 
The function getName recursively constructs the word representation by determining the magnitude of the number and appending the appropriate word representation.
This would have a time complexity of *O(1)* and a space complexity of *O(1)*.

Solution:
```
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const BILLION = 1000000000;
    const MILLION = 1000000;
    const THOUSAND = 1000;
    const HUNDRED = 100;
    const TWENTY = 20;
    const TEN = 10;

    const numsMap = new Map();
    numsMap.set(1, 'One');
    numsMap.set(2, 'Two');
    numsMap.set(3, 'Three');
    numsMap.set(4, 'Four');
    numsMap.set(5, 'Five');
    numsMap.set(6, 'Six');
    numsMap.set(7, 'Seven');
    numsMap.set(8, 'Eight');
    numsMap.set(9, 'Nine');
    numsMap.set(10, 'Ten');

    numsMap.set(11, 'Eleven');
    numsMap.set(12, 'Twelve');
    numsMap.set(13, 'Thirteen');
    numsMap.set(14, 'Fourteen');
    numsMap.set(15, 'Fifteen');
    numsMap.set(16, 'Sixteen');
    numsMap.set(17, 'Seventeen');
    numsMap.set(18, 'Eighteen');
    numsMap.set(19, 'Nineteen');

    numsMap.set(20, 'Twenty');
    numsMap.set(30, 'Thirty');
    numsMap.set(40, 'Forty');
    numsMap.set(50, 'Fifty');
    numsMap.set(60, 'Sixty');
    numsMap.set(70, 'Seventy');
    numsMap.set(80, 'Eighty');
    numsMap.set(90, 'Ninety');

    function getName(num) {
        if (num >= BILLION) {
            const billions = Math.floor(num/BILLION);
            const remaining = num % BILLION;
            return getName(billions) + ' Billion' + (remaining > 0 ? ' ' + getName(remaining) : '');
        } else if (num >= MILLION) {
            const millions = Math.floor(num/MILLION);
            const remaining = num % MILLION;
            return getName(millions) + ' Million' + (remaining > 0 ? ' ' + getName(remaining) : '');
        } else if (num >= THOUSAND) {
            const thousands = Math.floor(num/THOUSAND);
            const remaining = num % THOUSAND;
            return getName(thousands) + ' Thousand' + (remaining > 0 ? ' ' + getName(remaining) : '');
        } else if (num >= HUNDRED) {
            const hundreds = Math.floor(num/HUNDRED);
            const remaining = num % HUNDRED;
            return numsMap.get(hundreds) + ' Hundred' + (remaining > 0 ? ' ' + getName(remaining) : '');
        } else if (num >= TWENTY) {
            const tens = Math.floor(num/TEN) * TEN;
            const remaining = num % TEN;
            return numsMap.get(tens) + (remaining > 0 ? ' ' + getName(remaining) : '');
        } else {
            return numsMap.get(num);
        }
    }

    return num === 0 ? 'Zero' : getName(num);
};
```
