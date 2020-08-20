/*
A programming language is said to have first-class 
functions when functions in that language are treated 
like any other variable
*/

const x = 3
const y = function(text) {
  return `This is the text: ${text}`
}
const z = () => console.log('Zzzz!')

console.log(x) // 3
console.log(y('Hey Mands!')) // This is the text: Hey Mands!
z() // Zzzz!

