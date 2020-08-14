function waitFor(time = 2000) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('Executing promise...')
      }, time);
  })
} 

function returnsValue() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000);
  })
}

async function exec() {

  let value = await returnsValue()

  await waitFor(1500)
  console.log(`Async/Await ${value}...`)

  await waitFor(1500)
  console.log(`Async/Await ${value + 1}...`)

  await waitFor(1500)
  console.log(`Async/Await ${value + 2}...`)
}

exec()