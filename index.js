
var express = require('express')
var app = express()
var port = 8080

function rand() {
    const random = ['Ad-Lib Blues', 'All Alone', 'All By Myself', 'All My Tomorrows', 'All of Me', 'All of You',
        'All or Nothing at All', 'All the Things You Are', 'All the Way', 'All Through the Day', 'Always',];
    let a = random[Math.floor(Math.random() * random.length)];
    return a;
}

app.get('/', function (req, res) {
    res.send(rand());
})

app.get('/birth_date', function (req, res) {
    res.send('December 12, 1915')
})

app.get('/birth_city', function (req, res) {
    res.send('Hoboken, New Jersey')
})

app.get('/wives', function (req, res) {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
})

app.get('/picture', function (req, res) {
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg');
})

app.get('/public', function (req, res) {
    res.send('Everybody can see this page');
});

var basicAuth = require('express-basic-auth');
app.get('/protected', basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    unauthorizedResponse: "401 Not authorized"
}),(req, res) => {
    res.send("Welcome, authenticated client")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

