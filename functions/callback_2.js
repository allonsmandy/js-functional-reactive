const fs = require('fs') // read
const path = require('path')

const datapath = path.join(__dirname, 'data.txt')

function displayContent(_, content) {
    console.log(content.toString())
}

fs.readFile(datapath, displayContent)
fs.readFile(datapath, (_, content) => console.log(content.toString()))

fs.readFileSync(datapath)