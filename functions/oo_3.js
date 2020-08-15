function Product(name, price, desc = 0.15) {
  this.name = name
  this.price = price
  this._desc = desc

  this.finalPrice = function() {
    return this.price * (1 - this._desc)
  }
}

Product.prototype.log = function() {
  console.log(`Name: ${this.name}, Price: R$ ${this.price}`)
}

Object.defineProperty(Product.prototype, 'desc', {
  get: function() {
    return this._desc
  },
  set: function(newDesc) {
    if(newDesc >= 0 && newDesc <= 1) {
      this._desc = newDesc
    }
  }
})

Object.defineProperty(Product.prototype, 'descString', {
  get: function() {
    return `${this._desc * 100}%`
  }
})

const product_1 = new Product('Pencil', 8.55)

product_1.log() //Name: Pencil, Price: R$ 8.55
console.log(product_1.name) // Pencil
console.log(product_1.finalPrice()) // 7.2675
console.log(product_1.desc) // 0.15
console.log(product_1.descString) //15%