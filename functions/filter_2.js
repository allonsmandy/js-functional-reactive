Array.prototype.myFilter = function(fn) {
    const filtered = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            filtered.push(this[i])
        }
    }
    return filtered
}