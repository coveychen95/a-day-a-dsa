const context = require.context('../src', true, /\.ts$/)
context.keys().forEach(path => {
  if (path !== './main.ts') {
    // 加载此模块
    context(path)
  }
})

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}