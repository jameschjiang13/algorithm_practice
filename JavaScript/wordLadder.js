
let oneLetterDifferent = (word1, word2) => {
    let differetWordcounter = 0
    if(word1.length !== word2.length) {
        return false
    }

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
        } else {
            differetWordcounter = differetWordcounter + 1
        }
    }

    if(differetWordcounter === 1) {
        return true
    } else {
        return false
    }
}

let oneStepForward = (currentWord, currentWordList) => {
    for (let i = 0; i < currentWordList.length; i++) {
        if(oneLetterDifferent(currentWordList[i], currentWord)) {
            let currentWord = wordList[i]

        }

    }
}


let wordLadder = (beginWord, endWord, wordList) => {
    let currentTransformPath = [beginWord]
    let transformPathCollection = []
    let currentWordList = wordList
    let currentWord = beginWord
    
    for (let i = 0; i < wordList.length; i++) {
        if(oneLetterDifferent(wordList[i], currentWord)) {
            currentTransformPath.push(wordList[i])
            currentWord = wordList[i]
            currentWordList = currentWordList.filter(word => word !== currentWord)
          if(currentWord === endWord) {
            transformPathCollection.push(currentTransformPath)
          }

        }        
    }
}

