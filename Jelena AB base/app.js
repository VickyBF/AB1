var config = require('./config');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dustjs = require('adaro');
var app = express();

// Connect to MongoDB here

// Register model definition here

// dustjs view engine setup
app.engine('dust', dustjs.dust());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

//configure app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json
app.use(express.static(path.join(__dirname, 'public')));

// Initialize routers here
var rootRouter = require('./routes/root');
app.use('/', rootRouter);
var albumRouter = require('./routes/albums');
app.use('/albums', albumRouter);
var artistRouter = require('./routes/artists');
app.use('/artists', artistRouter);
var trackRouter = require('./routes/tracks');
app.use('/tracks', trackRouter);
var userRouter = require('./routes/users');
app.use('/users', userRouter);

app.get('/test', function(req,res){
    res.render('test');
});
module.exports = app;