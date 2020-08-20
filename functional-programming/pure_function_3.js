let qtdExec = 0

// Pure!
function sum(a, b) {
  qtdExec++  //observable side effect
  return a + b
}

console.log(sum(10, 20)) // 30