class SinglyNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

    toString() {
        return this.val.toString();
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node at the end
    append(val) {
        if (!this.head) {
            this.head = new SinglyNode(val);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new SinglyNode(val);
        }
    }

    // Display linked list - O(n)
    display() {
        let elements = "";
        let current = this.head;
        while (current) {
            elements += current.val + " -> ";
            current = current.next;
        }
        elements += "null";
        console.log("Singly linked list: " + elements);
    }

    // Search for node value - O(n)
    search(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}


// Example Usage
const singlyList = new SinglyLinkedList();
singlyList.append(1);
singlyList.append(3);
singlyList.append(4);
singlyList.append(7);
console.log("Head of the list: " + singlyList.head);
singlyList.display();
const searchValue = 7;
const found = singlyList.search(searchValue);
console.log("Search for value " + searchValue + " in list: " + found);
