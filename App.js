const express = require('express');
const path = require('path')
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {username: 'adisorn sriphongthong'})
})

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port)
})
