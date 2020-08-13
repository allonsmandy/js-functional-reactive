const cart = [
    { name: "Pen", qtd: 10, price: 7.99 },
    { name: "Printer", qtd: 0, price: 649.50 },
    { name: "Notebook", qtd: 4, price: 27.10 },
    { name: "Pencil", qtd: 3, price: 5.82 },
    { name: "Scissors", qtd: 1, price: 19.20 }
]

const getTotal = item => item.qtd * item.price 
const sum = (acc, el) => {
    console.log(acc, el)
    return acc + el
}

const totals = cart.map(getTotal)
console.log(totals)

const fullTotal = totals.reduce(sum, 0)
console.log(fullTotal) //224.96