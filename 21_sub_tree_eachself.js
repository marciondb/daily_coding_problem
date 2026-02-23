class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


function serialize(root) {
  if (!root) return "null"
  return `#${root.val},${serialize(root.left)},${serialize(root.right)}`
}

function isSubtreeFast(s, t) {
  const sStr = serialize(s)
  const tStr = serialize(t)

  console.log("S:", sStr)
  console.log("T:", tStr)

  return sStr.includes(tStr)
}


const s = new Node(
  3,
  new Node(4, new Node(1), new Node(2)),
  new Node(5)
)


const t = new Node(4, new Node(1), new Node(2))

console.log(isSubtreeFast(s, t))