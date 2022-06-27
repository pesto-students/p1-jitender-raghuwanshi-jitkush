class Node {
    constructor(value) {
        this.value = value;
        this.next = null ; 
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        let newNode = new Node(value)
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
            //this.head.previous = this.tail; //circular partially
            this.length++;
        }
        else {
            this.tail.next = newNode; 
            newNode.previous = this.tail;            
            this.tail = newNode;
            //this.head.previous = this.tail;   //circular partially
            this.length++;
        }
       // return this.print();
    }
    // prepend connection to tail
    prepend(value) {
        // if(this.head == null){
            // this.head = new Node(value);
            // this.tail = this.head;
            // this.length++;
        // }
        //else{
        let newNode = new Node(value)
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.head.previous = this.tail;
        this.length++;
        //return this.print();
       // }
    }
    
    delete() {
        let currNode = this.tail;
        let previousNode = this.tail.previous;
        currNode.previous = null;
        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
        //return this.print();
    }

    insert(value , index ){
        let newNode = new Node(value);
        let x = 1
        if(index == 1){
            this.prepend(value);
            this.length++;
        }
        else if(index == this.length){
            this.append(value);
            this.length++;
        }
        else{
            let prev = this.head;
            let x = 1
            while( x < index - 1) {
                prev = prev.next;
                x++;
            }
            let target = prev.next;
            prev.next = newNode;
            newNode.next = target;
            newNode.previous = prev;
            target.previous = newNode;
            this.length++;
        }
    }

    removeAt(index){
        let start = this.head;
        let x = 1;
        while( x < index ){
            start = start.next;
            x++;
        }
        let beforeTarget = start.previous;
        let afterTarget = start.next;
        beforeTarget.next = afterTarget;
        afterTarget.previous = beforeTarget;
        this.length--;
    }
    rotate(rotateValue) {
        let x = 1;
        let lastNode = this.tail;
        let lastPreviousNode = this.tail.previous;
            while (x <= rotateValue ){
                this.prepend(lastNode.value);
                this.length--;
                lastPreviousNode.next = null;
                lastNode.previous = null;
                lastNode = lastPreviousNode;
                lastPreviousNode = lastPreviousNode.previous;
                x++;
            }
            this.tail = lastNode;
            this.print();
        }     
        
        
    print(){
        let currNode = this.head;
        let myArray = [];
        let x = 0;
        while (currNode) {
            myArray.push([currNode])
            currNode = currNode.next;
        }
        console.log(myArray)
    }

}


const list = new LinkedList;
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
console.log(list.length);
list.print();
list.rotate(5);

//iteration check; we can dn tneed to rotate 8 time;

 