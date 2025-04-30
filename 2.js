// 3 (medium)

// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string,
// and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    const tokens = [];
    function helper(node) {
        if (node === null) {
            tokens.push("X");
            return;
        }
        tokens.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return tokens.join(",");
}

function deserialize(data) {
    const tokens = data.split(",");
    function helper() {
        const token = tokens.shift(); // or tokens.pop(0) in python
        if (token === "X") return null;
        const node = new Node(token);
        node.left = helper();
        node.right = helper();
        return node;
    }
    return helper();
}

// Exemplo de teste do problema:
// Cria uma árvore: raiz -> esquerda (com filho esquerdo) e direita
const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

// Verifica se o nó da esquerda do nó da esquerda é igual a 'left.left'
console.assert(deserialize(serialize(node)).left.left.val === 'left.left', "Teste falhou!");
console.log("Teste passou!");
