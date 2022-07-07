


class Graph {
	constructor(size){
		this.nodeCount = size;
		this.adjList = new Array(size);
		this.initAdjList()
	}


initAdjList(){
		for (let i = 0; i < this.nodeCount; i++) {
			this.adjList[i] = new Array;
		}
}


addEdge(u,v)
{
		this.adjList[u].push(v);
}

printAllPaths(s,d)
{
	let isVisited = new Array(this.nodeCount);
	for(let i=0;i<this.nodeCount;i++)
		isVisited[i]=false;
		let pathList = [];

		pathList.push(s);

		this.printAllPathsUtil(s, d, isVisited, pathList);
}

printAllPathsUtil(u,d,isVisited,localPathList)
{
	if (u == d) {
			console.log(localPathList);
		
			return;
		}
        
		isVisited[u] = true;

		
		for (let i=0;i< this.adjList[u].length;i++) {
			
			if (!isVisited[this.adjList[u][i]]) {
			
				localPathList.push(this.adjList[u][i]);
				this.printAllPathsUtil(this.adjList[u][i], d, isVisited,localPathList);
				localPathList.splice(localPathList.indexOf
				(this.adjList[u][i]),1);
			}
		}
}
}
const graph = new Graph(7);

let ed = [ [1,2] , [2,3] , [3,4] , [4,7] , [1,5] , [5,6] , [6,7]];

for(let i = 0 ; i < ed.length ;i++){
    console.log(ed[i][0],ed[i][1]);
   let  s = ed[i][0];
    let d = ed[i][1];
    graph.addEdge(s, d);
}


console.log("Following are all different paths from "
+ 1 + " to " + 7+"\n");
graph.printAllPaths(1, 7);
	


// This code is contributed by avanitrachhadiya2155
