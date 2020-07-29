const func = require('./basic_1')

// Pass a function as a parameter to another function
function execute(fn) {
    if (typeof fn == 'function') {
        console.log(`Function ${fn.name} here!! :)`)
        fn()
    }
}

execute(func.bonjour)
execute(func.bonaTarde)

// Returns a function from another function
function pow(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const powOf2 = pow(2)
console.log(powOf2(8))
console.log(pow(3)(4))

// challenges 
function sum(number1) {
    return function(number2) {
        const result = number1 + number2
        return console.log(`${number1} + ${number2} = ${result}`)
    }
}

function subtract(number1) {
    return function(number2) {
        const result = number1 - number2
        return console.log(`${number1} - ${number2} = ${result}`)
    }
}

function calculate(number1) {
    return function(number2) {
        return function(fn) {
            return fn(number1)(number2)
        }
    }
}

// functions with simple returns
function simplifiedCalculation(number1) {
    return function(number2) {
        return function(number3) {
            return function(fn) {
                return fn(number1, number2, number3)
            }
        }
    }
}

function simplifiedSum(number1, number2, number3) {
    return `Simplified Sum: ${number1 + number2 + number3}`
}

function simplifiedMultiply(number1, number2, number3) {
    return `Simplified Multiply: ${number1 + number2 + number3 }`
}

calculate(3)(7)(sum)
calculate(13)(7)(subtract)

console.log(
    simplifiedCalculation(3)(3)(3)(simplifiedSum),
    simplifiedCalculation(3)(3)(3)(simplifiedMultiply)
)
