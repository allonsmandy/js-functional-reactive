const cart = [
    { name: "Pen", qtd: 10, price: 7.99 },
    { name: "Printer", qtd: 0, price: 649.50 },
    { name: "Notebook", qtd: 4, price: 27.10 },
    { name: "Pencil", qtd: 3, price: 5.82 },
    { name: "Scissors", qtd: 1, price: 19.20 }
]

const getTotal = item => item.qtd * item.price 
const sum = (acc, el) =>  acc + el

Array.prototype.myReduce = function(fn, init) {
    let acc = init 
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
        } else {
            acc = fn(acc, this[i], i, this)
        }

    }
    return acc
}

const total = cart.map(getTotal).myReduce(sum)
console.log(total) //224.96