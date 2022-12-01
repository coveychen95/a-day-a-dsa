// 复制带随机指针的链表

class RandomNode {
  val: number
  next: RandomNode | null
  random: RandomNode | null
  constructor(val?: number, next?: RandomNode, random?: RandomNode) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.random = (random===undefined ? null : random)
  }
}

const cacheMap = new Map()
function copyRandomList(head: RandomNode | null): RandomNode | null {
  if (!head) return head
  if (!cacheMap.has(head)) {
    cacheMap.set(head, {val: head.val})
    Object.assign(
      cacheMap.get(head), 
      {
        next: copyRandomList(head.next),
        random: copyRandomList(head.random)
      }
    )
  }
  return cacheMap.get(head);
};