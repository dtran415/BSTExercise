class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        // if no root, new node is the root
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true) {
            if (val < current.val) {
                // if less and no left node place
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else { // otherwise move to left node
                    current = current.left;
                }
            } else if (val > current.val) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } else { // if equal no where to place
                return this;
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, current = this.root) {
        // not creating new node at the top like in insert(val) because it will create too many unused nodes

        // if no root, new node is the root
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        if (val < current.val) {
            if (current.left === null) {
                current.left = new Node(val);
                return this;
            } else {
                return this.insertRecursively(val, current.left);
            }
        } else if (val > current.val) {
            if (current.right === null) {
                current.right = new Node(val);
                return this;
            } else {
                return this.insertRecursively(val, current.right);
            }
        } else {
            return this;
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let current = this.root;

        while (current) {
            if (val < current.val)
                current = current.left;
            else if (val > current.val)
                current = current.right;
            else
                return current;
        }

        // if we reach here then node with val not found
        return undefined;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, current = this.root) {
        if (!current)
            return undefined;

        if (val === current.val)
            return current;

        if (val < current.val)
            return this.findRecursively(val, current.left);
        else
            return this.findRecursively(val, current.right);
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        const result = [];

        function traverse(node) {
            if (node) {
                result.push(node.val);
                traverse(node.left);
                traverse(node.right);
            }
        }

        traverse(this.root);
        return result;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        const result = [];

        function traverse(node) {
            if (node) {
                traverse(node.left);
                result.push(node.val);
                traverse(node.right);
            }
        }

        traverse(this.root);
        return result;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        const result = [];

        function traverse(node) {
            if (node) {
                traverse(node.left);
                traverse(node.right);
                result.push(node.val);
            }
        }

        traverse(this.root);
        return result;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        const result = [];
        const queue = [];

        if (!this.root)
            return result;

        queue.push(this.root);
        while (queue.length) {
            const node = queue.shift();
            result.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }

        return result;
        
    }
}

module.exports = BinarySearchTree;
