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
    if (!root.left && !root.right && target === 0) res.push(path)
    dfs(root.left, tar)
    dfs(root.right, tar)
    path.pop()
  }

  return res
};

