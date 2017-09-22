
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){ 
   
   // use real data from http://edtalmadge.iriscouch.com/ instead of this
          res.render('index', {
            title: 'test',
            something: 'hello',
            something_else: 'world' 
       }); // res.render   
  
}); // app.get

app.listen(process.env.C9_PORT);
console.log("Express server listening on port %d", app.address().port);

// test comment