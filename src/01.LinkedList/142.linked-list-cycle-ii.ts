import { fstat } from "fs"
import { ListNode } from "../main"

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return head
  let set = new Set()
  while (head.next) {
    if (set.has(head)) return head
    set.add(head)
    head = head.next
  }
  return null
}

function detectCycle2(head: ListNode | null): ListNode | null {
  if (!head) return null
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while(fast) {
    slow = slow!.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let temp: ListNode | null = head
      while (slow !== temp) {
        temp = temp!.next
        slow = slow!.next
      }
      return temp
    }
  }
  return null
};