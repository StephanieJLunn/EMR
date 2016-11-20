
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 5400);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use( function(req, res, next){
    app.locals.pretty = true
    next()
  });
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req,res) {
  res.render("default");
});

//Obtain the staff level specific page
app.get('/doctor', function(req,res) { res.render("layouts/doctor")});
app.get('/nurse', function(req,res) { res.render("layouts/nurse")});
app.get('/support', function(req,res) { res.render("layouts/support")});

//Render the Doctor specific pages
app.get('/finance', function(req,res) { res.render("layouts/finance")});
app.get('/administration', function(req,res) { res.render("layouts/administration")});
app.get('/reports', function(req,res) { res.render("layouts/reports")});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


