const switchNum = (number) => {
    if(number === 1){
        return 0
    } else {
        return 1
    }
}

const oddCells = function(n, m, indices) {
    let startMatrix = constructInitialArray(n,m)
    indices.forEach(index => {
        let matrixAfterFirstTransformation = startMatrix[index[0]].map((number) => {
            if (number === 1) {
                return 0
            } else {
                return 1
            }
        }); 
        startMatrix[index[0]] = matrixAfterFirstTransformation
    
        startMatrix.forEach(subArr => {
            if(subArr[index[1]] === 0) {
                subArr[index[1]] = 1
            } else {
                subArr[index[1]] = 0
            }
        });
    
    });
    console.log(startMatrix)
    let counter = 0
    startMatrix.forEach(subArr => {
        subArr.forEach(number => {
            if(number === 1) {
                counter = counter + 1
            }
        });
    });

    console.log(counter)
};

const constructInitialArray = (n,m) => {
    let startMatrix = []
    let startSubMatrix = []
    for (let j = 0; j < m; j++) {
        startSubMatrix = startSubMatrix.concat(0)            
    }

    for (let i = 0; i < n; i++) { 
        startMatrix.push(startSubMatrix)          
    }

    return startMatrix
}


const transformOneIndex = (n,m,index) => {
    let matrixAfterFirstTransformation = startMatrix[index[0]].map((number) => {
        if (number === 1) {
            return 0
        } else {
            return 1
        }
    }); 
    startMatrix[index[0]] = matrixAfterFirstTransformation

    startMatrix.forEach(subArr => {
        if(subArr[index[1]] === 0) {
            subArr[index[1]] = 1
        } else {
            subArr[index[1]] = 0
        }
    });

    console.log(startMatrix)
}

oddCells(2,3,[[0,1],[1,1]])
