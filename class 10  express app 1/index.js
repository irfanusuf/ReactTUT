const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('this is our first ssr app using node  and express.js ...i have recently installed nodemon.js ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})