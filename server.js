const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set

app.get('/'), function(req, res) {
  res.send("Hi");
}

app.get('/drumkit', function (req, res) {
        
    res.render('drumkit.ejs')
  
})

app.get('/clock', function (req, res) {
        
    res.render('clock.ejs')
  
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})