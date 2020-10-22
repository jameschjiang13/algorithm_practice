console.log("hoho")

find_string_permutation = (string) => {
    let arr = string.split("")
    let length = string.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = i+1; j < length; j++) {
            let temp = arr[i]
            arr[i] = arr[j] 
            arr[j] = temp

            console.log(arr)
        }
    }
}



// const bark = () => {
//     let counter = 0
    
//     const say_woof = () => {
//       counter = counter + 1
//       if(counter > 1) {     
//         return `woof woof ${counter} times`
//       } else {
//         return `zzzZZ`  
//       } 
//     }
//     return say_woof
//   }
//   const train_dog = bark()

//   console.log(train_dog())
//   console.log(train_dog())
//   console.log(train_dog())
//   console.log(train_dog())



// let fibonacci = (n) => {
//     if (n === 0) {
//       return 0
//     }
//     let i = 1
//     let j = 1
//     let temp
//     let counter = 0
//     while (n - 2 > counter) {
//         temp = i
//         i = j
//         j = temp + j
//         counter = counter + 1
//     }

//     return j
// }

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))
// console.log(fibonacci(8))

let decodePossiblities = (n) => {
    let numString = n.toString()
    let numArr = numString.split("")
    counter = 0
    console.log(numArr)


    return counter
}

decodePossiblities(122)