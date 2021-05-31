var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var ejs=require('ejs');
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   port:3306,
//   password:'root',
//   database:''
// });


var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var galleryRouter = require('./routes/gallery');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

var teamRouter = require('./routes/team');
//管理员页面
var managerRouter = require('./routes/manager');
var login1Router = require('./routes/login1');
var register1Router = require('./routes/register1');
var tablesRouter = require('./routes/tables');
var formsRouter = require('./routes/forms');
var chartsRouter  = require('./routes/charts');

var backgroundRouter = require('./routes/background');//后台主页面
var adminRouter = require('./routes/admin');
var addRouter = require('./routes/add');
var updateRouter = require('./routes/update');










var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine(".html",ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('exercise',));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact',contactRouter);
app.use('/gallery', galleryRouter);
app.use('/', loginRouter);
app.use('/register', registerRouter);

app.use('/team',teamRouter)
app.use('/add',addRouter);
app.use('/update',updateRouter);


//管理员页面
app.use('/background',backgroundRouter);
app.use('/admin',adminRouter);

app.use('/manager',managerRouter);
app.use('/login1',login1Router);
app.use('/register1',register1Router);
app.use('/tables',tablesRouter);
app.use('/forms',formsRouter);
app.use('/charts',chartsRouter);





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
