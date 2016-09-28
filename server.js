const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

mongoose.connect('mongodb://mlab.com/databases/mean_todo')

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.listen(8080);
console.log("App listening on port 8080");