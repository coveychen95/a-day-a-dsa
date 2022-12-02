import { ListNode } from "../main"
// 141. 环形链表

function hasCycle(head: ListNode | null): boolean {
  const map = new Map()
  while (head) {
    if (map.has(head)) return true
    map.set(head, true)
    head = head.next 
  }
  return false
};

function hasCycle2(head: ListNode | null): boolean {
  if (!head || !head.next) return false
  let slow: ListNode | null = head
  let fast: ListNode | null = head.next
  while (fast) {
    if (fast?.next?.next) {
      if (fast.next.next === slow) return true
    } else {
      return false
    }
    slow = slow!.next
    fast = fast.next.next
  }
  return false
};

function hasCycle3(head: ListNode | null): boolean {
  if (!head || !head.next) return false
  let slow:ListNode | null = head
  let fast:ListNode | null = head.next
  while (fast != slow) {
    if (!fast || !fast.next) return false
    slow = slow!.next
    fast = fast.next.next
  }
  return true
};



