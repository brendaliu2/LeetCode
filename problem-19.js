/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let current = head;
  let length = 0;
  while(current){
      length++;
      current = current.next;
  }

  let stopIdx = length - n + 1;
  let start = 0;

  let newList = new ListNode(0, head);
  let newCurrent = newList;

  while(newCurrent){
      start++;
      if(start === stopIdx){
          newCurrent.next = newCurrent.next.next;
      } else {
          newCurrent = newCurrent.next;
      }
  }
  return newList.next;
};