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
            console.log(this.root);
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
                console.log(currentNode)
            }
            else if(value > currentNode.value) {
                if(currentNode.right == null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
                console.log(currentNode)
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

            //              50
           //         /           \
           //        25             75
           //      /   \          /   \
        //       10     30      60      90
        //      / \    /  \    /  \    /  \
        //     5   15 28  35  55  65  80   100
    
    preOrder(root){
        if(!root){
            return;
        }
        this.preOrderArray.push(root.value);

        this.preOrder(root.left)

        this.preOrder(root.right);

        console.log(root)
        console.log()
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
tree.insert(75);
tree.insert(25);
tree.insert(30);
tree.insert(10);
tree.insert(60);
tree.insert(90);
tree.insert(90);
tree.insert(5);
tree.insert(15);
tree.insert(28);
tree.insert(35);
tree.insert(55);
tree.insert(65);
tree.insert(80);
tree.insert(100);





           //          50
           //        /    \
           //       25     75
           //      / \    / \
        //        10 30  60  90