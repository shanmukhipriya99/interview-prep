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

// <==================== Solution - 1 =========================>
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    if(list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    }
};

// <===================Solution - 2 ===========================>

var mergeTwoLists = function(list1, list2) {
  let list = new ListNode();
    let ptr = list;
    while(list1 && list2) {
      if(list1.val < list2.val) {
        list.next = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        list.next = new ListNode(list2.val);
        list2 = list2.next;
      }
      list = list.next;
    }
    while(list1) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
      list = list.next;
    }
    while(list2) {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
      list = list.next;
    }
    return ptr.next;
}
