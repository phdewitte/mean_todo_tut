let Todo = require('./models/todo');

// refactor for es6
function getTodos(response) {
  Todo.find(function(err, todos) {
    if (err)
      response.send(err)

    response.json(todos);
  });
};

module.exports = function(app) {
  app.get('/api/todos', function(request, response) {
    getTodos();
  });

  app.post('/api/todos', function(request, response) {
    Todo.create({
      text : request.body.text,
      done : false
    }, function(err, todo){
      if (err)
        response.send(err);

      getTodos();
    });
  });

  app.delete('/api/todos', function(request, response) {
    Todo.remove({
      _id : request.params.todo_id
    }, function(err, todo) {
      if (err)
        response.send(err)

      getTodos();
    });
  });

  app.get('*', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
  });
};