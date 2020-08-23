/*
it's like a container (wrapper) with a value,
it is an object that encapsulates a value and it has a map that
turns the value

- in functional programming you don't change the information, you evolve the data
- functors are objects that implement the map function
which is also a wrapper of a value
*/

// array is a example of functors
const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = numbers.map(number => number + 10).map(number => number * 20)

console.log(
  numbers, // [ 1, 2, 3, 4, 5, 6 ]
  newNumbers // [ 220, 240, 260, 280, 300, 320 ]
)

function SafeType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined
    },
    map(fn) {
      const newValue = !this.invalid() ? fn(this.value) : this.value
        return SafeType(newValue)
    },
    flatMap(fn) {
      return this.map(fn).value
    },
  }
}

const result = SafeType('This is a text')
  .map(text => text.toUpperCase())
  .map(text => `${text}!!!!`)
  .flatMap(text => text.split("").join(" "))

console.log(result) // T H I S   I S   A   T E X T ! ! ! !