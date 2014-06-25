//  Add the restify library
var restify = require('restify');
//  Create our api server
var server = restify.createServer({name: 'teaREST'});
//  configure requirements for our server
server.use(restify.fullResponse());
server.use(restify.bodyParser());
// Set the port
var port = process.env.PORT || 5000;
//  Start the server
server.listen(port, function () {
  console.log('teaREST is up: ', server.name, server.url);
});
//  Simple initial route
server.get('/', function (req, res, next) {
  res.send('Hello everyone');
});
//  Simple LED response route
server.post('/led', function (req, res, next) {
  if (req.params.call === 1) {
    res.send(1);
  }
});