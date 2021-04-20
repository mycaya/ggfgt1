const express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var exphbs = require('express-handlebars');

const app = express();

app.set('port', process.env.PORT || 80);
app.set("view engine", "hbs"); //setting view engine as handlebars
app.use(express.static(path.join(__dirname, 'views')));

//Route Declarations
const index = require('./routes/index');
app.use('/', index);

// build mongo database connection url //
process.env.DB_HOST = process.env.DB_HOST || 'localhost'
process.env.DB_PORT = process.env.DB_PORT || 27017;
process.env.DB_NAME = process.env.DB_NAME || 'astarter-frontend';

var hbsHelpers = exphbs.create({
    helpers: require("./routes/helpers.js").helpers,
    defaultLayout: 'layout',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: [path.join(__dirname, 'views', 'partials')]
});
app.engine('.hbs', hbsHelpers.engine);

//Setup Database
if (app.get('env') != 'live'){
	process.env.DB_URL = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/astarter-frontend';
}	else {
// prepend url with authentication credentials // 
	process.env.DB_URL = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/astarter-frontend';
}

app.use(session({
	secret: 'secret',
	proxy: true,
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ url: process.env.DB_URL })
	})
);

var port = 80;

app.listen(port, () => console.log('astarter-frontend is listening on: ' + port));