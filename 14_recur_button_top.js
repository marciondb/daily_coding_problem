// This problem was asked by Google.
// Given a binary tree of integers, find the maximum path sum between two nodes. 
// The path must go through at least one node, and does not need to go through the root.
class node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const treeToCheck = new node(
  10,
  new node(5),
  new node(15, new node(6), null)
)

const maximumPath = {
  maxSum: -Infinity
}

function walkTree(node) {
  if (!node) return 0

  const leftSum = Math.max(0, walkTree(node.left))
  const rightSum = Math.max(0, walkTree(node.right))

  // caminho que passa pelo nó atual (pode usar os dois lados)
  const currentPathSum = node.val + leftSum + rightSum

  if (currentPathSum > maximumPath.maxSum) {
    maximumPath.maxSum = currentPathSum
  }

  // retorna apenas UM lado (caminho descendente)
  return node.val + Math.max(leftSum, rightSum)
}

walkTree(treeToCheck)
console.log(maximumPath.maxSum)