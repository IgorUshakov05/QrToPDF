const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


const post_text = require('./middleware/postText.js')
const sendFile = require('./middleware/sendFile.js');
const e = require('express')


app.use(express.static(__dirname))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/instrument', (req, res) => {
  res.render('instrument')

})

app.post('/postText', post_text)

app.get('/massangers', (req, res) => {
  res.render('massangers')

})

app.get('/getfile', sendFile)

app.listen(port, () => {
  console.log(`Server to PORT: ${port}`)
})


