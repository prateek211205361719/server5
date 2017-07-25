
var express = require('express');
var app = express();

var hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partial');
hbs.registerHelper('getDate',() => {
    return new Date().toDateString();
});
app.set('view engine', hbs);


app.use((req, res, next) => {
        
    //res.send('hello how are u');
    next();
});


var port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    //res.send('hello how are u');
    res.render('home.hbs', {
        title:'Home page'
    });
});
app.get('/about', (req, res) => {
    //res.send('hello how are u');
    res.render('about.hbs', {
        title:'About page'
    });
});
app.get('/projects', (req, res) => {
    //res.send('hello how are u');
    res.render('project.hbs', {
        title:'project page'
    });
});

app.listen(port, function(){
    console.log('------port-----'+port);
});

