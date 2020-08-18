const path = require('path')
const fn = require('./functions')

const pathFolder = path.join(__dirname, '..', '_data', 'subtitles')

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']

const mergeContent = array => array.join(' ')
const separateTextBy = symbol => {
  return function(text) {
    return text.split(symbol)
  }
}

// function composition
fn.readFolder(pathFolder)
  .then(files => fn.elementsEndingWith(files, '.srt'))
  .then(filesSRT => fn.readFiles(filesSRT))
  .then(content => content.join('\n')) // mergeContent
  .then(allContent => allContent.split('\n')) // separateTextBy('\n')
  .then(lines => fn.removeIfEmpty(lines))
  .then(lines => fn.removeIfIncluded('-->')(lines))
  .then(lines => fn.removeIfHaveNumber(lines))
  .then(lines => fn.removeSymbols(symbols)(lines))
  .then(mergeContent)
  .then(separateTextBy(' '))
  .then(lines => fn.removeIfEmpty(lines))
  .then(lines => fn.removeIfHaveNumber(lines))
  .then(lines => fn.groupWords(lines))
  .then(lines => fn.sortByNumericAttribute('qtd', 'desc')(lines))
  // .then(console.log)
