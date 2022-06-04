class Node {
    constructor(value) {
        this.value =  value;
        this.left = null;
        this.right = null;
        return this;
    }
}

class BinarySearchTree {
    constructor(){
      this.root = null
    }

insert(value) {
    var newNode = new Node(value);
    if(!this.root){                             //dont use null, value can be undefined
        this.root = newNode;
        return this;
    }

    let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value) {
                if(currentNode.left == null){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else if(value > currentNode.value) {
                if(currentNode.right == null){
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
    if(!currentNode){
        console.log(currentNode);
        return false;
    }
        while(true){
            if(value < currentNode.value) {
                if(currentNode.left == null){
                    return false;
                }
                 currentNode = currentNode.left;                 
            }
            else if(value > currentNode.value) {
                if(currentNode.right == null){
                    return false;
                }
                    currentNode = currentNode.right;
            }
            else {
                return currentNode;
            }
        }
    }
 
}



const tree = new BinarySearchTree();
console.log(tree.search(100))
console.log(tree.insert(55))
console.log(tree.insert(30))
console.log(tree.insert(60))
console.log(tree.insert(10))
console.log(tree.insert(40))
console.log(tree.insert(58))
console.log(tree.insert(65))
//console.log(tree.search(10))




