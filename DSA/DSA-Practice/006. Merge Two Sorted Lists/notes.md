<================ Question ========================>

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order.

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
```

<=========================== Notes =============================>

## Understanding the problem:
The inputs are two sorted linked lists. We need to return a single merged linked list that is sorted.

## Approach - 1
First, if either of the lists are empty, we return the non-empty list. Then, we create a new ListNode and a new pointer variable, pointing to the new ListNode.
Then, using a while loop where list1 and list2 are valid, we compare the values at list1 and list2. If the value of list1 is less than the value of list2, the created ListNode will point to the value of list1 (by creating a new node with this value), and list1's next() is used to point to the next value. And vice-versa if the value of list2 is greater.
Then, we deal with scenarios where list1 is longer than list2 or vice-versa. For this, after exiting the previous while loop, we have another while loop where it works if list1 is valid. Inside the while loop, we start iterating through list1 and make the newly created ListNode point to all the remaining values.
The same is repeated with another while loop for list2.
At the end, we return the pointer variable.next. (This is because the pointer variable points to the new list that starts storing values from the next value.)
This would have a time complexity of *O(m+n)*, where *m* is the length of the first linked list and *n* is the length of the second linked list,  and a space complexity of *O(1)*.

## Approach - 2
Another approach is to use recursion, but this would cause an increased space complexity.
This would have a time complexity of *O(m+n)* and a space complexity of *O(m+n)*.
