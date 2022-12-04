import { ListNode } from "../main";

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false
  const vals: number[] = []
  while(head) {
    vals.push(head.val)
  }
  for(let i = 0, j = vals.length - 1; i < j; i++, j--) {
    if(vals[i] !== vals[j]) return false
  }
  return true
};