class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.preOrderArray=[];
        this.PostOrderArray=[];
        this.InOrderArray=[];
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while(currentNode) {
            if(currentNode == null) return `root not defined `;
            else if( value < currentNode.value){
                if(currentNode.left == null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else if(value > currentNode.value) {
                if(currentNode.right == null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
            else {
                return `duplicate value`;
            }
        }
    }

    search(value) {
        let currentNode = this.root;
        if(currentNode == null) {return `root not defined `}
        while(true){
            if( value < currentNode.value){
                if(currentNode.left == null) {
                    return false;
                }
                currentNode = currentNode.left;
            }
            else if(value > currentNode.value) {
                if(currentNode.right == null) {
                    return false;
                }
                currentNode = currentNode.right;
            }
            else {
                return currentNode;
            }
        }
    }
    
    preOrder(root){
        if(!root){
            return;
        }
        this.preOrderArray.push(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right);
    }

    callPreOrder(){
        this.preOrder(this.root)
        return this.preOrderArray;
    }

    inOrder(root){
        if(!root){
            return;
        }
        this.inOrder(root.left)
        this.InOrderArray.push(root.value);
        this.inOrder(root.right);
    }

    callinOrder(){
        this.inOrder(this.root)
        return this.InOrderArray;
    }

    postOrder(root){
        if(!root){
            return;
        }
        this.postOrder(root.left)
        this.postOrder(root.right);
        this.PostOrderArray.push(root.value);
    }

    callpostOrder(){
        this.postOrder(this.root)
        return this.postOrder;
    }
}



const tree = new BinarySearchTree();
tree.insert(50);
tree.search(75)
tree.insert(25);
tree.insert(30);
tree.insert(75);
tree.insert(10);
tree.insert(60);
tree.insert(90);
tree.insert(90);
console.log(`88888888888888888888888888888888`);
console.log(tree.callPreOrder())
console.log(`88888888888888888888888888888888`);
console.log(tree.callinOrder())
console.log(`88888888888888888888888888888888`);
console.log(tree.callpostOrder())
