const numbers = [1, 2, 3, 4, 5]
const dbl = number => number * 2
console.log(numbers.map(dbl)) //[ 2, 4, 6, 8, 10 ]

const names = ['Rei Arthur', 'Galadriel', 'Gandalf', 'Nihal']
const firstLetter = name => name[0]
console.log(names.map(firstLetter)) // [ 'R', 'G', 'G', 'N' ]