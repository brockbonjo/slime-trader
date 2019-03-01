var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//session middleware will go down below
var session = require('express-session');
var passport = require('passport');
//var methodOverride = require('method-overide');



//load the env variables
require('dotenv').config();



//create the express application
var app = express();



//Connect to the Mongo database using Mongoose with the code on the line below
require('./config/database');
//configure Passport
require('./config/passport');



//require the routes for my application
//usersRouter would route to the route of whatever my main model is.
var indexRouter = require('./routes/index');
var tradersRouter = require('./routes/traders');
var slimesRouter = require('./routes/slimes')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//mount the session middleware
app.use(session({
  secret: 'Session is engagged!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



//rename the path to match the above routers to mount them with the appropriate path
app.use('/', indexRouter);
app.use('/traders', tradersRouter);
app.use('/traders', slimesRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;