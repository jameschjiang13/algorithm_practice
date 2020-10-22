const lengthOfLIS = (input) => {
    let currentCounter = 0
    let maxCounter = 0
    for(let i = 0; i < input.length - 1; i++) {
        if(input[i+1] > input[i]) {
            currentCounter = currentCounter + 1
            if(currentCounter > maxCounter){
                maxCounter = currentCounter
            }
        } else {
            currentCounter = 1
        }
    }

    return maxCounter    
}

const lengthOfLISV2 = () => {
    
}

const recur = (num) => {
    if(num > 10) {
        return num
    } else {
        return recur(num + 1)
    }
}


console.log(recur(1))



