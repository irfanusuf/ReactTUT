const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!    this is our first express app')
})


app.get('/users', (req, res) => {
    res.send('no data base connected no users found. ')
  })


  app.post('/register', (req, res) => {
    res.send('we have no databases yet ......we cant register you ')
  })


  app.post('/login', (req, res) => {
    res.send('we have no databases yet ......we cant register you ')
  })


  app.delete


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})