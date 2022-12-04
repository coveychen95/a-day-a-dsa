import { ListNode } from "../main";

function reorderList(head: ListNode | null): void {
  let middle = findMiddle(head)
  let rightList = reverseList(middle)
  mergeList(head, rightList)
};

function reverseList(head: ListNode | null): ListNode | null {
  let pre = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return pre
}

function findMiddle(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let slow = head
  let fast = head
  while (fast?.next?.next) {
    slow = slow.next as ListNode
    fast = fast.next.next
  }
  return slow
}

function mergeList(l1: ListNode | null, l2: ListNode | null):void {
  while (l1 && l2) {
    const l1Next = l1.next
    const l2Next = l2.next
    l1.next = l2
    l1 = l1Next
    l2.next = l1
    l2 = l2Next
  }
}