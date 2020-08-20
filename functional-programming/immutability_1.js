function order(array) {
  return [...array].sort() // takes all the elements and put it in a new array, the original array remains the same
} 

const numbers = [3, 1, 7, 9,  4, 6]
order(numbers) // did not cause side effect = [ 1, 3, 4, 6, 7, 9 ]
const orderingNumbers = order(numbers)
// numbers.sort() // caused change! = [ 1, 3, 4, 6, 7, 9 ]

console.log(numbers) 
console.log(orderingNumbers) // [ 1, 3, 4, 6, 7, 9 ]

const protectNumbers = Object.freeze([3, 4, 6, 1])
protectNumbers.sort() // nop
protectNumbers[0] = 1000 // nop

// does not generate side effect
const partNumbers = numbers.slice(2)
console.log(numbers) // [ 3, 1, 7, 9, 4, 6 ]
console.log(partNumbers) // [ 7, 9, 4, 6 ]