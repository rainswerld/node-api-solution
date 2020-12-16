'use strict'

// write code that reads a text file and prints it to the console

// pull in the `fs` module, which contains methods that interact with the
// filesystem
const fs = require('fs')

// `process.argv` is an array of arguments that Node was run with. The first one
// will always be the path to the node executable, the second will be the path
// to the JS file that's running, and the third (process.argv[2]) will be the
// first argument we pass into our script
console.log(process.argv)

// save the argument we want
const inFile = process.argv[2]

// call readFile, and tell it to expect a file encoded in UTF-8 format
// our callback, defined here with an arrow function, will run after readFile
// either fails or finishes succesfully. If it fails, `error` will be defined,
// otherwise, `data` will contain the contents of `inFile`
fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
  if (error) {
    console.error('Something went wrong!')
  } else {
    console.log(data)
  }
})
