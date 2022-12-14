import { ListNode } from "../main"

// 迭代
function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return pre
};

// 递归
function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  const new_head = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return new_head
};