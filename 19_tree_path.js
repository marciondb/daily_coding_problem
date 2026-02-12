// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a binary tree, return all paths from the root to leaves.

// For example, given the tree:

//    1
//   / \
//  2   3
//     / \
//    4   5
// Return [[1, 2], [1, 3, 4], [1, 3, 5]].

class node{
  constructor(val, left=null, right=null){
    this.left = left
    this.right = right
    this.val = val
  }
}

const result = []
function getPaths(node, path){
  if (!node) return;

    const newPath = [...path, node.val];

    if (!node.left && !node.right) {
      result.push(newPath);
      return;
    }

    getPaths(node.left, newPath);
    getPaths(node.right, newPath);

}

const tree = new node(
  1, new node(2),
    new node(3,
        new node(4), new node(5)
        )
)
getPaths(tree, [])
console.log(result)