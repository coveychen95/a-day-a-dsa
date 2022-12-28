import { TreeNode } from "../main";

// DFS
function pathSum(root: TreeNode | null, target: number): number[][] {
  const res:number[][] = []
  const path:number[] = []
  dfs(root, target)

  function dfs(root: TreeNode | null, target: number): void {
    if (root === null) {
      return
    }
    path.push(root.val)
    const tar = target - root.val
    if (root.left === null && root.right === null && tar === 0) res.push(path.slice())
    dfs(root.left, tar)
    dfs(root.right, tar)
    path.pop()
  }

  return res
};


// BFS
class PathNode {
  node: TreeNode
  total: number
  path: number[]
  constructor(node: TreeNode, total: number, path: number[]) {
    this.node = node
    this.total = total
    this.path = path.slice()
    this.path.push(node.val)
    this.total += node.val
  }
}
function pathSum2(root: TreeNode | null, target: number): number[][] {
  const ans = new Array<Array<number>>()
  const stk = new Array<PathNode>()
  let he = 0, ta = 0
  if (root != null) stk[ta++] = new PathNode(root, 0, new Array<number>())
  while (he < ta) {
      const t = stk[he++]
      if (t.total == target && t.node.left == null && t.node.right == null) ans.push(t.path)
      if (t.node.left != null) stk[ta++] = new PathNode(t.node.left, t.total, t.path)
      if (t.node.right != null) stk[ta++] = new PathNode(t.node.right, t.total, t.path)
  }
  return ans
};
