const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.render('index'); 
});

app.listen(3000, ()=>{
    console.log('server initialized on http://localhost:3000');
});