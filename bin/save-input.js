'use strict'

const saveInput = require('../lib/save-input.js')

const outFile = process.argv[2]

if (!outFile) {
  throw new Error('Script requires one argument, an output file')
}

saveInput(outFile)
