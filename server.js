const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');
const port            = process.env.PORT || 8080;
const db              = require('./config/db')
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

mongoose.connect(db.url)

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method_Override'));

require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port 8080");
