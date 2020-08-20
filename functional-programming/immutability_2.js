const numbers = [2, 4, 6, 8, 10, 3]

// #1 - changeable data and imperative code
let total = 0
for (let index = 0; index < numbers.length; index++) {
  total += numbers[index]
}
console.log(total) // 33

// #2 - functional and declarative code
const sum = (a, b) => a + b
const total_2 = numbers.reduce(sum)
console.log(total_2) // 33

// #3 - recursion
function sum_2(array, total = 0) {
  if(array.length === 0) {
    return total
  }
  return sum_2(array.slice(1), total + array[0])
}
const total_3 = sum_2(numbers)
console.log(total_3) // 33