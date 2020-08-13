function workOrNot(value, chance) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chance) {
                reject('Error... try again!')
            } else {
                resolve(value)
            }
        } catch (error) {
            reject(error)
        }
    })
}

workOrNot('Testing...', 0.5).then(console.log).catch(error => console.log(`Errinho ${error}`))