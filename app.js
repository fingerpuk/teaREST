//  Add the restify library
var restify = require('restify'), userSave = require('save')('user');
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
//  Simple LED response route
server.post('/led', function (req, res, next) {
  if (req.params.call === 1) {
    res.send(1);
  }
});

/*server.get('/user', function (req, res, next) {
  userSave.find({}, function (error, users) {
    res.send(users);
  });
});

server.post('/user', function (req, res, next) {
  if (req.params.name === undefined) {
    return next(new restify.InvalidArgumentError('Name must be supplied'));
  }

  userSave.create({name: req.params.name}, function (error, user) {
    if (error) {
      return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
    }
    res.send(201, user);
  });
});

server.get('/user/:id', function (req, res, next) {
  userSave.findOne({ _id: req.params.id }, function (error, user) {
    if (error) {
      return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
    }
    if (user) {
      res.send(user);
    } else {
      res.send(404);
    }
  });
});

server.put('/user/:id', function (req, res, next) {
  if (req.params.name === undefined) {
    return next(new restify.InvalidArgumentError('Name must be supplied'));
  }

  userSave.update({ _id: req.params.id, name: req.params.name }, function (error, user) {
    if (error) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
    
    res.send();
  });
});

server.del('/user/:id', function (req, res, next) {
  userSave.delete(req.params.id, function (error, user) {
    if (error) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
    
    res.send();
  });
}); */