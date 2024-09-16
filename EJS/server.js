var express = require('express');
var app = express()
const PORT = 3000

const peopleData = require('./data/people.js')

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    let judgement = 'Welcome to the underground!'
    res.render('pages/index', {
        people: peopleData,
        tagline: judgement
    })
})




app.get('/about', (req, res) => {
    let judgement = 'Welcome to the underground!'
    res.render('pages/about', {
        people: peopleData,
        tagline: judgement
    })
})

app.listen(PORT,()=>{
    console.log('listening on port 3000...');
})



