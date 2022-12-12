import { TreeNode } from "../main"

// DFS
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};

// BFS
function maxDepth2(root: TreeNode | null): number {
  if(root === null) return 0
  let queue: TreeNode[]  = []
  let deep = 0
  queue.push(root)
  while(queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift() as TreeNode
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    deep++
  }
  return deep
};
