function generateNumber(min, max, time) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const random = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, time);
    })
}

function generate() {
    // array de promisses 
    return Promise.all([   
        generateNumber(1, 60, 4000),
        generateNumber(1, 60, 1000),
        generateNumber(1, 60, 500),
        generateNumber(1, 60, 3000),
        generateNumber(1, 60, 100),
        generateNumber(1, 60, 1500)
    ])
}

console.time('promise')

generate().then(console.log) // [ 44, 51, 58, 3, 1, 28 ]
.then(() => {
    console.timeEnd('promise')
})