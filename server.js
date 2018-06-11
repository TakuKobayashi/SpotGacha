var express = require('express');

var Restaurant = require(__dirname + '/restaurant.js');
var restaurant = new Restaurant();

var app = express();

//use path static resource files
app.use(express.static('public'));

var port = process.env.PORT || 3000;

//wake up http server
var http = require('http');

//Enable to receive requests access to the specified port
var server = http.createServer(app).listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/', function(req, res){
  console.log(req.query);
  restaurant.requestHotpepper({keyword: req.query.keyword}).then(function(response){
    res.json(response.body);
  }).catch(function(err){
    res.json(err);
  });
});