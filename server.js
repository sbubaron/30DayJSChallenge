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

app.get('/01drumkit', function (req, res) {
        
    res.render('01drumkit.ejs')
  
})

app.get('/02clock', function (req, res) {     
    res.render('02clock.ejs')
})

app.get('/03cssvars', function (req, res) {     
    res.render('03clock.ejs')
})

app.get('/04arrays', function (req, res) {     
    res.render('04arrays.ejs')
})

app.get('/05flexpanel', function (req, res) {     
    res.render('05flexpanel.ejs')
})

app.get('/06typeahead', function (req, res) {     
    res.render('06typeahead.ejs')
})

app.get('/07arrays', function (req, res) {     
    res.render('07arrays.ejs')
})

app.get('/08canvas', function (req, res) {     
    res.render('08canvas.ejs')
})

app.get('/09devtools', function (req, res) {     
    res.render('09devtools.ejs')
})

app.get('/10check', function (req, res) {     
    res.render('10check.ejs')
})

app.get('/11customvid', function (req, res) {     
    res.render('11customvid.ejs')
})

app.get('/12keyseq', function (req, res) {     
    res.render('12keyseq.ejs')
})

app.get('/13slidescroll', function (req, res) {     
    res.render('13slidescroll.ejs')
})

app.get('/14byrefbyval', function (req, res) {     
    res.render('14byrefbyval.ejs')
})

app.get('/15localstorage', function (req, res) {     
    res.render('15localstorage.ejs')
})

app.get('/16mousemove', function (req, res) {     
    res.render('16mousemove.ejs')
})

app.get('/17sort', function (req, res) {     
    res.render('17sort.ejs')
})

app.get('/18times', function (req, res) {     
    res.render('18times.ejs')
})

app.get('/19webcam', function (req, res) {     
    res.render('19webcam.ejs')
})

app.get('/20speechdetection', function (req, res) {     
    res.render('20speechdetection.ejs')
})

app.get('/21geolcoation', function (req, res) {     
    res.render('21geolocation.ejs')
})

app.get('/22highlighter', function (req, res) {     
    res.render('22highlighter.ejs')
})

app.get('/23speech', function (req, res) {     
    res.render('23speech.ejs')
})

app.get('/24stickynav', function (req, res) {     
    res.render('24stickynav.ejs')
})

app.get('/25events', function (req, res) {     
    res.render('25events.ejs')
})

app.get('/26stripenav', function (req, res) {     
    res.render('26stripenav.ejs')
})

app.get('/27clickdrag', function (req, res) {     
    res.render('27clickdrag.ejs')
})

app.get('/28vidspeed', function (req, res) {     
    res.render('28vidspeed.ejs')
})

app.get('/29countdown', function (req, res) {     
    res.render('29countdown.ejs')
})

app.get('/30mole', function (req, res) {     
    res.render('30mole.ejs')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})