function Product(name, price, desc = 0.15) {
  this.name = name
  this.price = price
  this.desc = desc

  this.finalPrice = function() {
    return this.price * (1 - this.desc)
  }
}

const product_1 = new Product('Pencil', 8.55)
const product_2 = new Product('Notebook', 100)

console.log(product_1.name) // Pencil
console.log(product_2.price) // 22.30
console.log(product_2.finalPrice()) // 85