function textWithSize(min) {
  return function (max) {
    return function (error) {
      return function (text) {
        const size = (text || '').trim().length 
        if(size < min || size > max) {
          throw error
        }
      }
    }
  }
}

/*
We assume that I don't want all functions to generate exceptions, 
I want to create ONE that encapsulates error handling.
*/

// without currying
function applyValidation(fn, value) {
  try {
    fn(value)
  } catch (error) {
    return {
      error
    }
  }
}

const product = { name: 'A', price: 14.99, discount: 0.25 }
const forceSize = textWithSize(4)(255)
const productName = forceSize('ERROR: Product name is invalid!')

// I call it again, I can't use intermediate versions of the functions, so it duplicates everything
console.log(applyValidation(productName, product.name)) 

// with currying (lazy evaluation)
function myApplyValidation(fn) {
  return function(value) {
    try {
      fn(value)
    } catch (error) {
      return {
        error
      }
    }
  }
}

const validatesName = myApplyValidation(productName)
console.log(validatesName(product.name))