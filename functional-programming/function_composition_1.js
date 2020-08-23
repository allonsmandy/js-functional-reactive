// composes the execution of the two functions on a given value
function composition(...functions) { 
  return function(value) {
    return functions.reduce((acc, fn) => {
      return fn(acc)
    }, value)
  }
}

const scream = text => text.toUpperCase()
const emphasize = text => `${text}!!!!!!!!!!`
const slow = text => text.split('').join(' ')

const result = composition(scream, emphasize, slow)('stop')
console.log(result) // S T O P ! ! ! ! ! ! ! ! ! !


/* one of the biggest selling points of functional programming 
is precisely the composition of functions as if you were building lego.
- small functions with a high degree of reuse
- composing functions becomes easy

in this example we are using currying to pass
the parameters in a parseal way */

// I was able to save my composition of functions to call it, so I don't need to replicate the same steps

const exaggerated = composition(scream, emphasize, slow)

const result_1 = exaggerated('stop') // S T O P ! ! ! ! ! ! ! ! ! !
const result_2 = exaggerated('be careful') // B E   C A R E F U L ! ! ! ! ! ! ! ! ! !
console.log(result_1, result_2)