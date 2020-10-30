
const graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];


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
