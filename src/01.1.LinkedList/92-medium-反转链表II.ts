import { ListNode } from "../main";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  return null
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