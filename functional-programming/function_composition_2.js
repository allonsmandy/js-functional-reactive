/* if the value of acc is a promise, I have to spread it to be solved so that 
I can pass the acc to the function and do the next step
*/
function composition(...functions) { 
  return function(value) {
    return functions.reduce(async (acc, fn) => {
      if(Promise.resolve(acc) === acc) { // check if it's a promise
        return fn(await acc) // waiting for the promise to be resolved
      } else {
        return fn(acc)
      }
    }, value)
  }
}

const scream = text => text.toUpperCase()
const emphasize = text => `${text}!!!!!!!!!!`
const slow = text => new Promise(resolve => {
  setTimeout(() => resolve(text.split('').join(' ')), 3000);
}) 

const exaggerated = composition(scream, emphasize, slow)
const aLittleExaggerated = composition(scream, emphasize)

exaggerated('stop').then(console.log) // S T O P ! ! ! ! ! ! ! ! ! !
aLittleExaggerated('be careful').then(console.log) // BE CAREFUL!!!!!!!!!!
