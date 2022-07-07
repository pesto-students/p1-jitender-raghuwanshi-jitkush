class Graph {
    constructor(){
        this.nodeCount = 0;
        this.adjacencyList = new Map();
        this.bfsQueue = new Array;
        this.StartVertex = null;
        this.dfsQueue = new Array;
    }

    
    addVertex(node){
        if(this.nodeCount == 0){
            this.StartVertex = node
        }
        this.adjacencyList.set(node, []);
        this.nodeCount++;
    }

    addEdge(node1, node2){
        if(!this.adjacencyList.has(node1)){
            this.addVertex(node1);
        }

        if(!this.adjacencyList.has(node2)){
            this.addVertex(node2)
        }

        this.adjacencyList.get(node1).push(node2)
        this.adjacencyList.get(node2).push(node1)
    }

    removeVertex(node){
        if(this.adjacencyList.has(node)){
            this.adjacencyList.get(node).forEach( element => {
                this.removeEdge(node, element);
            });
        }
        this.adjacencyList.delete(node);
    }

    removeEdge(node1, node2){
        if(this.adjacencyList.has(node1)){
            const filteredArray = this.adjacencyList.get(node1).filter( node => node != node2);
            this.adjacencyList.set(node1, filteredArray)
        }

        if(this.adjacencyList.has(node2)){
            const filteredArray = this.adjacencyList.get(node2).filter( node => node != node1);
            this.adjacencyList.set(node2, filteredArray)
        }
    }

    bfs(){    
        let tempQueue = new Array; 
        tempQueue.push(this.StartVertex)
        this.bfsQueue.push(this.StartVertex);
        let visited = new Object;
        visited[this.StartVertex] = true;
        while(true){
            if(tempQueue.length == 0){
                return this.bfsQueue;
            }
            let currentVertex = tempQueue.shift();
            this.bfsQueue.push(currentVertex)
            let currentList = this.adjacencyList.get(currentVertex)
            currentList.forEach( element => {
                if(!visited[element]){
                    visited[element] = true;
                    tempQueue.push(element);
                }
            })
            }
        }
        
    pathExist(node1, node2) {
        this.StartVertex = node1;
        this.bfs();
        for(el in this.bfsQueue){
            if(node2 == el){
                return `path exists between ${node1} to ${node2}`;
            }
            else{
                continue;
            }
        }
        return `path does not exist`;
    }
    
    showConnection() {
        [...this.adjacencyList.keys()].forEach( key => {
        console.log(`${key} --> ${this.adjacencyList.get(key)}`)})
    }
}


const graph = new Graph();

let edges = [[1,3] , [1,2] , [1,4] , [3,5] , [3,6] , [3,7], [9,8]]
for(el of edges){
    let edge = el;
    let s = edge[0];
    let d = edge[1];
    graph.addEdge(s,d);
}

graph.showConnection();
console.log()
console.log(graph.pathExist(1,8));


