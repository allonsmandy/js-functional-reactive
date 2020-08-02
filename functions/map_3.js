Array.prototype.myMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        mapped.push(fn(this[i], i, this))
    }
    return mapped
}