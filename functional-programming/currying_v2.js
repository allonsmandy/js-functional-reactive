// function without use currying 
function textWithSize(min, max, error, text) {
  const size = (text || '').trim().length

  if(size < min || size > max) {
    throw error
  }
}
const product = { name: 'A', price: 14.99, discount: 0.25 }
textWithSize(4, 255, 'ERROR: Invalid name!', product.name)

// with currying

/*
- I can reuse and create different versions because of currying
- I can have parsed versions of the function
- I can create intermediate versions of the functions
- Lazy Evaluation
*/

function myTextWithSize(min) {
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
const myProduct = { name: 'A', price: 14.99, discount: 0.25 }

// I used part of the logic of the function
const forceSize = myTextWithSize(4)(255)

const productName = forceSize('ERROR: Product name is invalid!')
productName(myProduct.name)

// I can reuse the data already defined in a function
forceSize('ERROR: Invalid name')(myProduct.name)
