var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var signup = require('./routes/signUp')
var products = require('./routes/products')
var addProduct = require('./routes/addProduct')
var editProduct = require('./routes/editProduct')
var editUser = require('./routes/editUser')
var news = require('./routes/news')
var fileUpload = require('./routes/fileUpload')
var district = require('./routes/districts')
var sms = require('./routes/sms')
var approvalaccept = require('./routes/approvalResponse')


var app = express();
//app.get('/signIn',(req, res)=>res.redirect('http://localhost:3000/adminHome'));
       
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/signUp', signup);
app.use('/products', products);
app.use('/addProduct', addProduct);
app.use('/editProduct', editProduct)
app.use('/editUser', editUser)
app.use('/news', news)
app.use('/fileUpload', fileUpload)
app.use('/district', district)
app.use('/sms', sms)
app.use('/approvalaccept', approvalaccept)





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
