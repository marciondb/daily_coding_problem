// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

// For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

const list = new DoublyLinkedList()

const n1 = new Node(1)
list.head = n1
list.tail = n1
list.length++

const n2 = new Node(4)
n1.next = n2
n2.prev = n1
list.tail = n2
list.length++

const n3 = new Node(3)
n2.next = n3
n3.prev = n2
list.tail = n3
list.length++

const n4 = new Node(4)
n3.next = n4
n4.prev = n3
list.tail = n4
list.length++

const n5 = new Node(1)
n4.next = n5
n5.prev = n4
list.tail = n5
list.length++

function isPalindrome(list) {
  let left = list.head;
  let right = list.tail;

  while (left && right) {
    if (left.val !== right.val) return false;

    // quando cruzam ou se encontram, acabou
    if (left === right || left.next === right) break;

    left = left.next;
    right = right.prev;
  }

  return true;
}
console.log(isPalindrome(list))