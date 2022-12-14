import { ListNode } from "../main";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const  dummyNode = new ListNode(-1)
  dummyNode.next = head
  let pre = dummyNode
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next as ListNode
  }
  let curr = pre.next
  for(let i = 0 ;i < right - left; i++) {
    const next = curr!.next
    curr!.next = next!.next
    next!.next = pre.next
    pre.next = next
  }
  return dummyNode.next
};

function reversLinkedList(head: ListNode | null): ListNode| null {
  let pre = null
  let curr = head
  while(curr) {
    const next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return head
}