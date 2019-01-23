const fs = require('fs')

const readableStream = fs.createReadStream('./hello.txt')
readableStream.pipe(process.stdout)
