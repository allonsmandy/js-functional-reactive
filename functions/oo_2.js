class Product {
  constructor(name, price, desc = 0.5) {
    this._name = name
    this.price = price
    this.desc = desc
  }

  get finalPrice() {
    return this.price * (1 - this.desc)
  }

  get name() {
    return `Product: ${this._name}`
  }

  get price() {
    return this._price
  }

  set name(newName) {
    this._name = newName.toUpperCase()
  }

  set price(newPrice) {
    if(newPrice >= 0) {
      this._price = newPrice
    }
  }
}

const product = new Product('Printer', 10000)
console.log(product.finalPrice) // 5000
console.log(product.name) // Product: Printer

product.name = 'Scissors'
console.log(product.name) // SCISSORS

product.price = -20
console.log(product.price) // 1000

product.price = 5555
console.log(product.price) // 5555

console.log(typeof Product) // function