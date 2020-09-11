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



const startRace = () => {
    let counter = 0
    const click = () => {
        counter = counter + 1
        if(counter === 1){
            return "You won!"
        } else {
            return "You lost!"
        }
    }

    return click 
}

const firstRun = startRace()
console.log(firstRun())
console.log(firstRun())
console.log(firstRun())
console.log(firstRun())

const secondRun = startRace()
console.log(secondRun())
console.log(secondRun())
console.log(secondRun())
console.log(secondRun())


let counter = 0
const click = () => {
    counter = counter + 1
    if(counter === 1){
        return "You won!"
    } else {
        return "You lost!"
    }
}

console.log(click())
console.log(click())
console.log(click())
console.log(click())
