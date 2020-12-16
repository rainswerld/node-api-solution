'use strict'

const fs = require('fs')

const heyYall = function (inFile) {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
    if (error) {
      console.error(error)
    }

    // turn content into an array of each line
    const lines = content.split('\n')

    // clean up the array by removing all empty lines
    // non-empty lines are names, so save them to a new variable
    const names = lines.filter(line => line !== '')

    names.forEach(name => {
      console.log(`Hey ${name}!`)
    })
  })
}

module.exports = heyYall
