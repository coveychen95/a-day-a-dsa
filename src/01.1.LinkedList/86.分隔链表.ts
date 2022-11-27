import { ListNode } from "../main";

function partition(head: ListNode | null, x: number): ListNode | null {
  let leftNil = new ListNode(0, head)
  let rightNil = new ListNode(0)
  const saveLeft = leftNil
  const saveRight = rightNil
  let curr = head
  while (curr) {
    if (curr.val < x) {
      leftNil.next = curr
      leftNil = leftNil.next
    } else {
      rightNil.next = curr
      rightNil = rightNil.next
    }
    // release menmory: curr.next
    const temp = curr.next
    curr.next = null
    curr = temp
  }
  rightNil.next = null
  leftNil.next = saveRight.next
  return saveLeft.next
};