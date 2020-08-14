function generateNumber(min, max, forbiddenNumbers) {
  if(min > max) [max, min] = [min, max]
  return new Promise((resolve, reject) => {
      const random = parseInt(Math.random() * (max - min + 1)) + min
      if(forbiddenNumbers.includes(random)) {
        reject('Repeated number')
      } else {
        resolve(random)
      }
  })
}

async function generateMegaSena(qtdNumbers) {
  try {
    const numbers = []
    for(let _ of Array(qtdNumbers).fill()) {
      numbers.push(await generateNumber(1, 60, numbers))
    }
    return numbers
  } catch(e) {
    throw "Ops!"
  }
}

generateNumber(1, 5, [1, 2, 4]).then(console.log).catch(console.log)
generateMegaSena(8).then(console.log).catch(console.log)