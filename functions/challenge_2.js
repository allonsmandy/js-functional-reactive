const fs = require('fs') // read
const path = require('path')

function readFile(path) {
    return new Promise(resolve => {
        fs.readFile(path, function(_, content) {
            resolve(content.toString())
        })
    })
}

const datapath = path.join(__dirname, 'data.txt')
readFile(datapath).then(console.log)