var config = require('./config');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dustjs = require('adaro');
var app = express();
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
var mongoose   = require('mongoose');
require('./models');
require('express-session');

//passport
var User = mongoose.model('User');
passport.use(new LocalStrategy({
        usernameField:'userName',
        passwordField:'password'

    },
    function(username, password, done) {
        User.findOne({userName: username}, function (err, user) {
            if (err) { return done(err); }
            // Return an error as in Node
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
                // If user does not exist return the error and the message
            }
            user.isValidPassword(password, function(err,isMatch){
                if (isMatch==true){
                    return done(null, true);
                    // Authentication is good, the password is valid
                }else{
                    return done(null, false, {message:"Incorrect password! "})
                }
            });
        });
    }
));

passport.serializeUser(function(users, done) {
    done(null, 0);
    // Invoke passport with user._id authenticated
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        // Deserializza e cerca attraverso l'id
        done(err, user);
    });
});


// Connect to MongoDB here

mongoose.connect(config.mongoUrl + config.mongoDbName);

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
////passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport. As we use persistent local session --> passport.session(). They are middleware.

// Initialize routers here

var routers = require('./routes/routers');
app.use('/', routers.root);
app.use('/albums', routers.albums);
app.use('/artists', routers.artists);
app.use('/tracks', routers.tracks);
app.use('/users', routers.users);
app.use('/signup', routers.signup);
app.use('/library', routers.library);
app.get('/login',function(req,res){
    res.render('login')
});

app.post('/login',
    passport.authenticate('local', { successRedirect: '/library',
        failureRedirect: '/signup' }));


module.exports = app;