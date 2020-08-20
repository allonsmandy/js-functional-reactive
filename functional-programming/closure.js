/*
closure is when a function remembers its lexical scope, 
even when the function is executed outside that lexical scope
*/

const sum = require('./closure_scope')

const x = 1000
console.log(sum) // 100