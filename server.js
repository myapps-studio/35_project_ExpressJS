var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

// First view
app.get('/google_login', function (req, res) {
    res.render('google_login');
});

// Second view

app.get('/google_after_login', function(req, res){
    res.render('dynamic', {
        user: {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        }
    });
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});