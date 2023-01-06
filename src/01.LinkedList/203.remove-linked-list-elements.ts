import { ListNode } from "../main"

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const nil = new ListNode(-1, head)
  let temp = nil
  while (temp && temp.next) {
      const next = temp.next
      if (next.val === val) {
          temp.next = next.next
      } else {
          temp = temp.next
      }
  }
  return nil.next
};

function removeElements2(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null
  head.next = removeElements2(head.next, val)
  return head.val === val ? head.next : head
};