const cart = [
    { name: "Pen", qtd: 10, price: 7.99, fragile: true },
    { name: "Printer", qtd: 1, price: 649.50, fragile: true },
    { name: "Notebook", qtd: 4, price: 27.10, fragile: false },
    { name: "Pencil", qtd: 3, price: 5.82, fragile: false },
    { name: "Scissors", qtd: 1, price: 19.20, fragile: true }
]

// filter, map, reduce

// 1: fragile === true
// 2: qtd * price -> total
// 3: media

const isFragil = cart.filter(product => product.fragile)
const getTotal = isFragil.map(product => product.qtd * product.price)
const calc = (acc, el) => {
    const newQtd = acc.qtd + 1
    const newTotal = acc.total + el
    return {
        qtd: newQtd,
        total: newTotal,
        media: +(newTotal / newQtd).toFixed(2)
    }
}

console.log(getTotal) // [79.9, 649.5, 19.2]
console.log(getTotal.reduce(calc, { qtd: 0, total: 0, media: 0})) // { qtd: 3, total: 748.6, media: 249.53 }
console.log(getTotal.reduce(calc, { qtd: 0, total: 0, media: 0}).media) // 249.53
