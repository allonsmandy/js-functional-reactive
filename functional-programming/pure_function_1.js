/*
  a pure function is a function in which the return value is 
  determined only by its input values, with no side effects 
  and observable
*/

const PI = 3.14

// pure or impure? IMPURE! PI is an external value...
function areaCirc(radius) {
  return radius * radius * PI
}
console.log(areaCirc(10)) // 314

// pure
function areaCircPure(radius, pi) {
  return radius * radius * pi
}
console.log(areaCircPure(10, 3.14)) // 314
