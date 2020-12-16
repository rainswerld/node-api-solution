'use strict'

// Require the filesystem module
const fs = require('fs')

// Create a function for copying json from an input file, to an output file
const copyJson = function (inFile, outFile) {
  // Read data from `infile`, ensuring it is read in `utf8`, what JavaScript is encoded in
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    // If we have an error
    if (error) {
      // log it as an error
      console.error(error.stack)

      // end the function early
      return
    }

    // pojo = plain old JavaScript object
    let pojo
    try {
      // turn the inputs file data into a JavaScript object
      pojo = JSON.parse(data)
    } catch (error) {
      // If the file isn't JavaScript then fail
      console.error(error.stack)
      return
    }

    // convert pojo into json, 2 specifies how many spaces to indent the object
    // allows the JSON to be formatted with newlines
    const json = JSON.stringify(pojo, null, 2)

    // write our json to `outFile`
    // flag: w is used for writing, it's the default so the object isn't needed
    // the 'a' flag could be used instead for appending to a file
    fs.writeFile(outFile, json, { flag: 'w' }, error => {
      if (error) {
        console.error(error.stack)
        return
      }
      console.log('\ncopied')
    })
  })
}

module.exports = copyJson
