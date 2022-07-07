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
            this.head.previous = this.tail; //circular partially
            this.length++;
        }
        else {
            this.tail.next = newNode; 
            newNode.previous = this.tail;            
            this.tail = newNode;
            this.head.previous = this.tail;
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
    checkLoop() {
        let head,tail = 0;
        let flag = false;
        if(this.head.previous != null){
            head = this.head.previous;
            flag =true;
            console.log(head, flag);
            return flag;
        }
        
        if(this.tail.next != null){
            tail = this.tail.next;
            flag =true;
            console.log(tail, flag);
            return flag;
        }

        console.log(`/n` +flag);
    }

}

const list = new LinkedList;
list.append(10)
list.append(20)
list.append(30)
list.prepend(100)
list.delete();
list.append(80)
list.prepend(500)
list.insert(111,1);
list.insert(666,6)
list.insert(555,5)
list.print();
list.removeAt(5);
list.print();
console.log(list.length);
list.checkLoop();