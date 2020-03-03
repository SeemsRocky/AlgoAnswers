/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//brute force with two passes o(n) space is 0(1)
var removeNthFromEnd = function(head, n) {
  let length = 0;
  for(let curr=head;curr!==null;curr=curr.next){
      length+=1;
  }
  for(let curr = head, prev = null; curr!==null; prev=curr, curr=curr.next,length-=1){
      if(length===n){
          if(prev===null){
              return head.next
          } else {
              prev.next = curr.next;
              return head;
          }
      }
  }
};