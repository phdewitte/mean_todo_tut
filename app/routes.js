let Todo = require('./models/todo');

getTodos = (response) => {
  Todo.find(function(err, todos) {
    if (err)
      response.send(err)

    response.json(todos);
  });
};

module.exports = function(app) {
  app.get('/api/todos', function(request, response) {
    getTodos(response);
  });

  app.post('/api/todos', function(request, response) {
    Todo.create({
      text : request.body.text,
      done : false
    }, function(err, todo){
      if (err)
        response.send(err);

      getTodos(response);
    });
  });

  app.delete('/api/todos/:todo_id', function(request, response) {
    Todo.remove({
      _id : request.params.todo_id
    }, function(err, todo) {
      if (err)
        response.send(err)

      getTodos(response);
    });
  });

  app.get('*', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
  });
};