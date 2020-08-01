function exec(fn, a, b) {
    fn(a, b)
}

const sum = (a, b) => console.log(a + b)
const subtract = (a, b) => console.log(a - b)

exec(sum, 56, 38)
exec(subtract, 182, 27)

const callback = () => console.log('Executing...')
setInterval(callback, 1000);