const cart = [
    { name: "Pen", qtd: 10, price: 7.99 },
    { name: "Printer", qtd: 0, price: 649.50 },
    { name: "Notebook", qtd: 4, price: 27.10 },
    { name: "Pencil", qtd: 3, price: 5.82 },
    { name: "Scissors", qtd: 1, price: 19.20 }
]

const qtdEqualToZero = product => product.qtd > 0
const validProducts = cart.filter(qtdEqualToZero)
console.log(validProducts)