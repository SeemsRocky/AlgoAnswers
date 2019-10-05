/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
       this.val = val;
       this.next = null;
   }
var bruteMergeTwoLists = function(l1, l2) {
    const arr= [];
    while(l1||l2){
      if(l1){
        arr.push(l1.val);
        l1=l1.next;
      }
      if(l2){
        arr.push(l2.val);
        l2=l2.next;
      }
    }
    arr.sort((a,b)=>a-b);
    // console.log(arr);
    let list;
    let curr;
    for(const val of arr){
      if(list){
        curr.next = new ListNode(val);
        curr = curr.next;
      } else {
        list = new ListNode(val);
        curr = list;
      }
    }
    return curr;
};
// console.log(bruteMergeTwoLists,);
var mergeTwoLists = function(l1,l2){
  let curr = l1;
  while(curr && l2){
    if(l2.val<curr.val){
      let addMe = new ListNode(l2.val);
      addMe.next = curr.next;
      curr.next = addMe;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if(l2) curr.next = l2;
  return l1;
}