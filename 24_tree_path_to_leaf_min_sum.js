// This question was asked by Apple.

// Given a binary tree, find a minimum path sum from root to a leaf.

// For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

//   10
//  /  \
// 5    5
//  \     \
//    2    1
//        /
//      -1

//   10
//  /  \
// 4    5
//  \     \
//  6     1
//        /
//      -1

function minimumPath(root) {
  
  function dfs(node) {
    if (!node) {
      return { sum: Infinity, path: [] }
    }

    if (!node.left && !node.right) {
      return { sum: node.val, path: [node.val] }
    }

    const left = dfs(node.left)
    const right = dfs(node.right)

    let best

    if (left.sum < right.sum) {
      best = left
    } else {
      best = right
    }

    return {
      sum: node.val + best.sum,
      path: [node.val, ...best.path]
    }
  }

  return dfs(root)
}
class treeNode{
  constructor(val, left, right){
    this.left = left
    this.right = right
    this.val = val
  }
}

const tree = new treeNode(
  10,
  new treeNode(
    5,
    null,
    new treeNode(2)
  ),
  new treeNode(
    5,
    null,
    new treeNode(
      1,
      new treeNode(-1),
      null
    )
  )
)
console.log(minimumPath(tree))