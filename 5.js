// Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.
//     a
//    / \
//   b   c
//  /
// d

class Node {
  constructor(val, l=null, r=null){
    this.val = val
    this.right = r
    this.left = l
  }
}

const nodeToBeTested = new Node("a", new Node("b", new Node("d"), null), new Node("c"))

const counter = {
  maxDepth: -1,
  value: null
}

function walkTree(node, depth) {
  if (node === null) return

  if (depth > counter.maxDepth) {
    counter.maxDepth = depth
    counter.value = node.val
  }

  walkTree(node.left, depth + 1)
  walkTree(node.right, depth + 1)
}

function getTheDeepest(node) {
  walkTree(node, 0)
  return counter.value
}

console.log(getTheDeepest(nodeToBeTested))













