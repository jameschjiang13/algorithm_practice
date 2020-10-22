const flip = (arr, startIndex) => {
    endNum = 1 - arr[startIndex]
    for (let i = 0; i < arr.length - startIndex; i++) {
        arr[arr.length - i - 1] = endNum
    }

    return arr
}

// console.log(flip([0,0,0,0,0,0], ))

const minFlips = (targetArr) => {
    let currentArr = []
    let flipCounter = 0
    for (let i = 0; i < targetArr.length; i++) {
        currentArr = currentArr.concat([0])        
    }

    for (let j = 0; j < targetArr.length; j++) {
        if(currentArr[j] !== targetArr[j]) {
            currentArr = flip(currentArr, j)
            flipCounter = flipCounter + 1
        }        
    }

    return flipCounter
}

const minFlipsV2 = (string) => {
    let initialArr = []
    let currentNum = 0
    let flipCounter = 0
    for (let i = 0; i < string.length; i++) {
        initialArr = initialArr.concat([0])        
    }

    for (let j = 0; j < string.length; j++) {
        if (string[j] !== currentNum) {
            flipCounter = flipCounter + 1
            currentNum = 1 - currentNum
        }        
    }

    console.log(flipCounter)
}

minFlipsV2([0,0,1,0,1,1,1,0,1])


