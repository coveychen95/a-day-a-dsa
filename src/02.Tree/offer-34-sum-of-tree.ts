import { TreeNode } from "../main";

// DFS
function pathSum(root: TreeNode | null, target: number): number[][] {
  const res:number[][] = []
  const path = []

  function dfs(root: TreeNode, target: number): void {
    if (root === null) {
      return
    }
    const tar = target - root.val
    if (root.left) dfs(root.left, tar)
    if (root.right) dfs(root.right, tar)
  }

  return res
};

