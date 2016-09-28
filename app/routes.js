let Todo = require('./models/todo')

app.get('/api/todos', function(request, response) {
  Todo.find(function(err, todos) {
    if (err)
      response.send(err)

    response.json(todos);
  });
});

app.post('/api/todos', function(request, response) {
  Todo.create({
    text : request.body.text,
    done : false
  }, function(err, todo){
    if (err)
      response.send(err);

    Todo.find(function(err, todos) {
      if (err)
        response.send(err)
      repsonse.json(todos);
    });
  });
});

app.delete('/api/todos', function(request, response) {
  Todo.remove({
    _id : request.params.todo_id
  }, function(err, todo) {
    if (err)
      response.send(err)

    Todo.find(function(err, todos) {
      if (err)
        response.send(err)
      response.json(todos);
    });
  });
});

app.get('*', function(request, response) {
  response.sendfile('./public/index.html');
})