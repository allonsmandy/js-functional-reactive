/*
functions that operate on other functions, 
taking them as arguments or returning them, are 
called higher-order functions
*/

function exec(fn, ...params) {
  return function(initialText) {
    return `${initialText} ${fn(...params)}!`
  }
}

function sum(a, b, c) {
  return a + b + c
}

function mult(a, b) {
  return a * b
}

const result_1 = exec(sum, 4, 5, 6)('The result of the sum is')
const result_2 = exec(mult, 30, 10)('The result of the multiplication is')

console.log(result_1) // The result of the sum is 15!
console.log(result_2) // The result of the multiplication is 300!
