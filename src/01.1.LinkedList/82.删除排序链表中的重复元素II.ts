import { ListNode } from "../main";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  let res = new ListNode(0, head)
  let curr = res
  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const x = curr.next.val;
      while (curr.next && curr.next.val === x) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next
    }
  }
  return res.next
};