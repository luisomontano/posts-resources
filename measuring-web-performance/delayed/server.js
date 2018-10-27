const express = require('express')
const app = express()
const path = require('path')

app.use(function (req, res, next) {
  if (req.url.endsWith('html')) {
    next()
  } else {
    setTimeout(() => next(), 1000)
  }
})

const assetsPath = path.join(__dirname, 'public')

app.use('/static', express.static(assetsPath))

app.get('/', (req, res) => {
  res.type('.html')
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(3000)
