function generateNumber(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        resolve(random)
    })
}

generateNumber(10, 30).then(console.log) // 14...