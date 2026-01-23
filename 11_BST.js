// This problem was asked by LinkedIn.

// Determine whether a tree is a valid binary search tree.

// A binary search tree is a tree with two children, left and right, and satisfies the
// constraint that the key in the left child must be less than or equal to the root and the key in the right
// child must be greater than or equal to the root.

class node {
  constructor(val, left = null, right = null){
    this.val = val
    this.left = left
    this.right = right
  }
}

const checkIfIsBinarySearchTree = (tree) => {
  if (tree === null) return true

  const queue = [{ node: tree, min: -Infinity, max: Infinity }]

  while (queue.length > 0) {
    const { node, min, max } = queue.shift()

    // como é <= e >=, o intervalo é INCLUSIVO
    if (node.val < min || node.val > max) return false

    // esquerda: tudo tem que ser <= node.val
    if (node.left !== null) {
      queue.push({ node: node.left, min: min, max: node.val })
    }

    // direita: tudo tem que ser >= node.val
    if (node.right !== null) {
      queue.push({ node: node.right, min: node.val, max: max })
    }
  }

  return true
}

// const treeToCheck = new node( 
//   3, 
//   new node(2), 
//   new node(4)
// )
const treeToCheck = new node(
  10,
  new node(5),
  new node(15, new node(6), null)
)
console.log(checkIfIsBinarySearchTree(treeToCheck))
//   3
// /  \
// 2   4