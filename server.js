const express = require('express')
const app = express()

const showData = require('./showdata')

app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index', { show: showData })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})