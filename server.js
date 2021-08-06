const express = require('express')
const app = express()

const showData = require('./showdata')

app.set('view engine', 'pug')
app.use(express.static('public'))

// Home Page
app.get('/', (req, res) => {
  res.render('index', { show: showData })
})

// Season Route
app.get('/season/:id', (req, res) => {
  // Getting Variables
  const seasonNumber = req.params.id
  const showTitle = showData.title

  res.render('season', { season: showData.seasons[seasonNumber - 1], showTitle })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})