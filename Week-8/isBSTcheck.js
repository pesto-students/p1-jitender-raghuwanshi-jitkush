//we use inorder traversal to traverse the biary tree. for BST a binary tree inorder traversal
//will return a sorted array. else the tree is not a binary tree.
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
        this.inOrderArray = new Array;
    }

        inOrder(root) {
            if(!root){
                return `tree is empty. plesae enter a valid tree`;
            }

            this.inOrder(root.left);
            this.inOrderArray.push(root.value);
            this.inOrder(root.right);
        }
        
        validateIsBST(){
            let root = this.root;
            this.inOrder(root);
    
            console.log(this.inOrderArray);
            for(let x = 0 ; x < this.inOrderArray.length - 1 ; x++){
                if(this.inOrderArray[x] < this.inOrderArray[(x+1)]){
                    continue;
                }
                else{
                    return `the tree is not binary tree`
            }
        }
        return `the tree is binary tree`;
    }
}

    


const tree = new BinarySearchTree;
tree.root = new Node(50)
tree.root.left = new Node(25)
tree.root.left.left = new Node(10)
tree.root.left.left = new Node(100)
tree.root.left.right = new Node(30)
tree.root.right = new Node(75)
tree.root.right.left = new Node(65)
tree.root.right.right = new Node(85)

console.log(tree.validateIsBST());
