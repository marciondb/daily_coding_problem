// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. 
// Assume that each node in the tree also has a pointer to its parent. 
// According to the definition of LCA on Wikipedia: 
// “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants 
// (where we allow a node to be a descendant of itself).
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.parent = null
  }
}

function connect(parent, left, right) {
  if (left) {
    parent.left = left
    left.parent = parent
  }
  if (right) {
    parent.right = right
    right.parent = parent
  }
}

//         3
//       /   \
//      5     1
//     / \   / \
//    6   2 0   8
//       / \
//      7   4

const n3 = new Node(3)
const n5 = new Node(5)
const n1 = new Node(1)
const n6 = new Node(6)
const n2 = new Node(2)
const n0 = new Node(0)
const n8 = new Node(8)
const n7 = new Node(7)
const n4 = new Node(4)

connect(n3, n5, n1)
connect(n5, n6, n2)
connect(n1, n0, n8)
connect(n2, n7, n4)

function lowestCommonAncestor(p, q) {

  let a = p
  let b = q

  while(a != b) {
    a = a ? a.parent : q
    b = b ? b.parent : p
  }

  return a
}

let lca1 = lowestCommonAncestor(n5, n1)
console.log("LCA(5,1) =", lca1.val) // 3

let lca2 = lowestCommonAncestor(n6, n4)
console.log("LCA(6,4) =", lca2.val) // 5

let lca3 = lowestCommonAncestor(n7, n8)
console.log("LCA(7,8) =", lca3.val) // 3
