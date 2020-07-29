// arrow function
const myArrowFunction = () => console.log('My Arrow Function')
myArrowFunction()

const myArrowFunctionWithParameters = nome => console.log(`Hey ${nome}, it's ok? ^-^`)
myArrowFunctionWithParameters('Mandy')

const soma = (...listNumbers) => {
    let total = 0
    for(let number of listNumbers) {
        total += +number
    }
    return total
}
console.log(soma(2, '6', 8, 5, 9, '7', '2'))

// Arrow function receives another arrow function
const myName = name => lastName => `My name is ${name} ${lastName}`
console.log(myName('Amanda')('Matos'))

// this
Array.prototype.log = function() { console.log(this) }

const numbers = [1, 2, 3]
numbers.log()