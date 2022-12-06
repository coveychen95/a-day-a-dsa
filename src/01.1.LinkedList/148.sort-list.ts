import { ListNode } from "../main"

function sortList(head: ListNode | null): ListNode | null {
  const list:number[] = []
  while(head) {
    list.push(head.val)
    head = head.next
  }
  const arr = list.sort((a, b) => a - b)
  let dummy = new ListNode(-1)
  let curr = dummy
  for(let i = 0; i < arr.length; i++) {
    curr.next = {
      val: arr[i],
      next: null
    }
    curr = curr.next
  }
  return dummy.next
};