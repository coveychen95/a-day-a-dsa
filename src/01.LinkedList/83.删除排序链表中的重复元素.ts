import { ListNode } from "../main";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let curr = head
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
};