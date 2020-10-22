
let checkPalindrom = (string) => {
    if (string === string.split("").reverse().join("")){
        return true
    }
    return false
}

let findLongestPalindromicSubstring = (string) => {
    let longest =[]
    let currentInnerString = string
    let currentOuterString = string
    for (let j = 0; j < string.length; j++) {
        for (let i = 0; i < currentInnerString.length; i++) {
            if (checkPalindrom(currentInnerString)) {
                longest.concat(currentInnerString)
            }
            currentInnerString = currentInnerString.slice(0, -1)            
        } 
        currentOuterString = currentOuterString.slice(0, 1)
        currentInnerString = currentOuterString
    }    
    
    return longest
    
}


console.log(findLongestPalindromicSubstring("agog"))