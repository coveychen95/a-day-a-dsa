import { ListNode } from "../main";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  let nil = new ListNode(0, head)
  let curr = nil
  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const saveVal = curr.next.val;
      while (curr.next && curr.next.val === saveVal) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next
    }
  }
  return nil.next
};