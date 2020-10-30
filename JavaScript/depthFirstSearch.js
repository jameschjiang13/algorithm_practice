
const graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];

const bfs = (graph, root) => {
    let nodeLen = {}
    for (let i = 0; i < graph.length; i++) {
        nodeLen[i] = Infinity        
    }
    nodeLen[root] = 0

    let queue = [root]
    let current

    while (queue.length !== 0) {
        current = queue.shift() //first run, 0
        let curConnected = graph[current] //first run will be [0, 1, 1, 1, 0]
        let neighboutIdx = []
        let idx = curConnected.indexOf(1) //in [0, 1, 1, 1, 0], find the first 1, idx is its index, this case, 1
        while (idx != -1) {
            neighboutIdx.push(idx)
            idx = curConnected.indexOf(1, idx + 1)
        } // at this point, neighboutIdx should have an array of all neighbours, neighboutIdx = [1,2,3]
        for (let i = 0; i < neighboutIdx.length; i++) {
            if (nodeLen[neighboutIdx[i]] === Infinity) {
                nodeLen[neighboutIdx[i]] = nodeLen[current] + 1
                queue.push(neighboutIdx[i])
            }
        }
    }
    return nodeLen
}



const myDepthFirstSearch = (graph, root) => {
    //initiate nodeLen
    let nodeLen = {}
    for (let i = 0; i < graph.length; i++) {
        nodeLen[i] = Infinity
    }
    nodeLen[root] = 0
    //intialize queue
    let queue = [root]
    let current
    //find all the neighbours of current
    //may need to start outmost loop here
    while(queue.length !==0) {
        current = queue.shift()
        let curConnected = graph[current] //this gives an array [0,0,1,0,0], then we need to convert this array into [2]
        let connectedIdx = []
        let idx = curConnected.indexOf(1)
        while(idx !== -1) {
            connectedIdx.push(idx)       
            idx = curConnected.indexOf(1, idx+1)
        }
        //now, connectedIdx = [2]
        for (let i = 0; i < connectedIdx.length; i++) {
            if(nodeLen[connectedIdx[i]] === Infinity){
                nodeLen[connectedIdx[i]] = nodeLen[current] + 1
                queue.push(i)
            }
        }
    }

    console.log(nodeLen)
}
myDepthFirstSearch(graph, 1)
