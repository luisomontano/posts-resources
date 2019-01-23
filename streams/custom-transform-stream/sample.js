const fs = require('fs')
const { Transform } = require('stream')
class UpperStream extends Transform {
  _transform (chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
}

const readableStream = fs.createReadStream('./hello.txt')
readableStream.pipe(new UpperStream()).pipe(process.stdout)
