/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head===null){
      return head;
  }
  let curr = head;
  let temp = new ListNode(curr.val);
  while(curr.next!==null){
      let front = new ListNode(curr.next.val);
      front.next = temp;
      temp = front;
      curr=curr.next;
  }
  return temp;
};