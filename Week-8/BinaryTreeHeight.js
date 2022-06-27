class Node {
    constructor(value){
        this.value = value;
        this.left - null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.height = null;
        this.bfsQueue = [];
        this.inOrderArray = []
    }

    insert(value){
        if(!this.root){
            this.root = new Node(value);
        }
        else{
            let currentNode = this.root;
            while(currentNode){
                if(value < currentNode.value){
                    if(currentNode.left == null){
                        currentNode.left = new Node(value);
                    }
                    currentNode = currentNode.left;
                }
                else if(value > currentNode.value){
                    if(currentNode.right == null){
                        currentNode.right = new Node(value);
                    }
                    currentNode = currentNode.right; 
                }
                else {
                    return `duplicate value`;
                }
            }
        }
    }

    treeHeight() {
        let tempQueue = new Array;
        let currentNode = this.root;
        tempQueue.push(currentNode);
        while(true){
            let levelNodecount = tempQueue.length; 
            if(levelNodecount == 0){
                console.log(`height of the tree: ${this.height}`)
                return this.bfsQueue;
            }
            this.height++;

            while(levelNodecount > 0){
                currentNode = tempQueue.shift();
                this.bfsQueue.push(currentNode.value);
                if(currentNode.left) {
                    tempQueue.push(currentNode.left);
                }
                
                if(currentNode.right) {
                    tempQueue.push(currentNode.right);
                }
                
                
                levelNodecount --;
            }
        }
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

console.log(tree.treeHeight());

