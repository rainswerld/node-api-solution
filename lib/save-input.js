const readline = require('readline')
const fs = require('fs')

const saveInput = function (outFile) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Write some text to save and then press enter!\n>', text => {
    rl.close()

    fs.writeFile(outFile, text, { flag: 'w' }, error => {
      if (error) {
        console.error(error.stack)
        return
      }

      console.log(`Succesfully saved input to ${outFile}!`)
    })
  })
}

module.exports = saveInput
