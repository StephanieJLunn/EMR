
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

//Obtain the staff level specific landing page
app.get('/doctor_home', function(req,res) { res.render("layouts//doctor_home")});
app.get('/nurse_home', function(req,res) { res.render("layouts/nurse_home")});
app.get('/staff_home', function(req,res) { res.render("layouts/staff_home")});

//Render the Doctor specific pages
app.get('/doctor_finance', function(req,res) { res.render("layouts/doctor_finance")});
app.get('/doctor_administration', function(req,res) { res.render("layouts/doctor_administration")});
app.get('/doctor_reports', function(req,res) { res.render("layouts/doctor_reports")});
app.get('/doctor_patientPortal', function(req,res) { res.render("layouts/doctor_patientPortal")});
app.get('/doctor_newPatient', function(req,res) { res.render("layouts/doctor_newPatient")});
app.get('/doctor_patientSearch', function(req,res) { res.render("layouts/doctor_patientSearch")});
app.get('/doctor_scheduling', function(req,res) { res.render("layouts/doctor_scheduling")});

//Render the Nurse specific pages
app.get('/nurse_patientPortal', function(req,res) { res.render("layouts/nurse_patientPortal")});
app.get('/nurse_newPatient', function(req,res) { res.render("layouts/nurse_newPatient")});
app.get('/nurse_patientSearch', function(req,res) { res.render("layouts/nurse_patientSearch")});
app.get('/nurse_scheduling', function(req,res) { res.render("layouts/nurse_scheduling")});

//Render the Staff specific pages
app.get('/staff_patientPortal', function(req,res) { res.render("layouts/staff_patientPortal")});
app.get('/staff_newPatient', function(req,res) { res.render("layouts/staff_newPatient")});
app.get('/staff_patientSearch', function(req,res) { res.render("layouts/staff_patientSearch")});
app.get('/staff_scheduling', function(req,res) { res.render("layouts/staff_scheduling")});
app.get('/staff_billing', function(req,res) { res.render("layouts/staff_billing")});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


