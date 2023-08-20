
const express = require('express')
const app = express()
const port = 5000
const mail = require('./Components/mail')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/mail', mail );

app.listen(port, () => {
  console.log(`Example app listening on port localhoast${port}`)
})
