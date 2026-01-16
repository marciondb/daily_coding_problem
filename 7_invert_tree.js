// This problem was asked by Google.

// Invert a binary tree.

// For example, given the following tree:

//     a
//    / \
//   b   c
//  / \  /
// d   e f
// should become:

//   a
//  / \
//  c  b
//  \  / \
//   f e  d

// a l r => a r l 
class treeNode{
  constructor(val, left, right){
    this.left = left
    this.right = right
    this.val = val
  }
}

const tree = new treeNode("a",
  new treeNode("c",
    null,
    new treeNode("f")),
  new treeNode("b",
    new treeNode("e"),
    new treeNode("d")))

function invertTree(treeToInvert) {
  if(!treeToInvert) {
    return null;
  }

  const left = treeToInvert.left
  const right = treeToInvert.right

  treeToInvert.left = right
  treeToInvert.right = left

  invertTree(treeToInvert.left)
  invertTree(treeToInvert.right)

  return treeToInvert

}
console.log(invertTree(tree))
