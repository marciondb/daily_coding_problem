// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a binary tree, return the level of the tree with minimum sum.
// estrutura da árvore
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// tree
//        5
//      /   \
//     3     8
//    / \   / \
//   2   4 6   10

const root = new TreeNode(
  5,
  new TreeNode(
    3,
    new TreeNode(2),
    new TreeNode(4)
  ),
  new TreeNode(
    8,
    new TreeNode(6),
    new TreeNode(10)
  )
)

function minLevelSum(root) {
  if (!root) return 0

  let queue = [root]
  let level = 1
  let minLevel = 1
  let minSum = Infinity

  while (queue.length) {
    let size = queue.length
    let sum = 0

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    if (sum < minSum) {
      minSum = sum
      minLevel = level
    }

    level++
  }

  return minLevel
}

const result = minLevelSum(root)
console.log("Level with minimum sum:", result)