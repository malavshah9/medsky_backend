var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
//<<<<<<< HEAD

var data = require('./routes/usertbl');
var logg =require('./routes/user_login');
var sign=require('./routes/user_signup');
var msign=require('./routes/signupmail');


//<<<<<<< HEAD
var data = require('./routes/usertbl');
var logg =require('./routes/user_login');
var sign=require('./routes/user_signup');

//=======
//>>>>>>> 8ea7ff40586b738bc2647c26ff13f6b5f21c369f
var presc=require('./routes/routes_prescription_mst');
var doc=require('./routes/routes_doctos');
var blogs=require('./routes/blog_tbl');
var med=require('./routes/routes_medicines');
var presc2=require('./routes/routes2_prescription_mst');
var medicines=require('./routes/routes_medicines2');
//<<<<<<< HEAD
var forget=require('./routes/mail');
var passchange=require('./routes/changepass');




//=======
//<<<<<<< HEAD
var likes=require('./routes/blog_like');
var likeEmail= require('./routes/likeEmail');
//=======
var forget=require('./routes/mail');
var passchange=require('./routes/changepass');
var rem=require('./routes/routes_reminder');

//var forget=require('./routes/forgetpass');
//eba09921db8a52583a1eba96ce4e3b80977e6c4e
//>>>>>>> 834bbaeb80e84b2ca018ea7ecba8e578c0a95707

//>>>>>>> eba09921db8a52583a1eba96ce4e3b80977e6c4e
//>>>>>>> 8ea7ff40586b738bc2647c26ff13f6b5f21c369f

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/prescription',presc);
app.use('/prescription2',presc2);
app.use('/doctor',doc);
app.use('/medicines',med);
app.use('/med',medicines);
app.use('/login',logg);
app.use('/blog',blogs);
app.use('/signup',sign);
//<<<<<<< HEAD
app.use('/mails',msign);
app.use('/forget',forget);
app.use('/alldata',data);
app.use('/change',passchange);
//=======
//<<<<<<< HEAD
app.use('/blog_likes',likes);
app.use('/likeEmail',likeEmail);
//=======
app.use('/forget',forget);
app.use('/rem',rem);
//app.use('/reminder',reminder);
//>>>>>>> 834bbaeb80e84b2ca018ea7ecba8e578c0a95707
//>>>>>>> 8ea7ff40586b738bc2647c26ff13f6b5f21c369f

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
