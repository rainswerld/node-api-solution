'use strict'

const fs = require('fs')
const shuffle = require('knuth-shuffle').knuthShuffle

/*
 *

 Now might be a good time to use the built-in Node debugger:
 https://nodejs.org/api/debugger.html

 Built into Node, the debugger can help as you inspect and write code.

 Put `debugger` (without the quotes) in your code,
 and then run the file with the `inspect` command: `node inspect <filename>`
 continue with `cont`, enter repl with `repl`, exit repl with `ctrl-c`

*/

const randomizer = function (inFile, outFile) {
  fs.readFile(inFile, 'utf-8', (error, data) => {
    if (error) {
      console.error(error.stack)
      return
    }

    let dataArray = data.split('\n')

    // remove empty lines from file
    dataArray = dataArray.filter(data => data !== '')

    // randomize the array
    const randomLines = shuffle(dataArray.slice(0))

    // add empty line back
    randomLines.push('')

    fs.writeFile(outFile, randomLines.join('\n'), { flag: 'w' }, error => {
      if (error) {
        console.error(error.stack)
        return
      }

      console.log('\nrandomized!')
    })
  })
}

module.exports = randomizer
