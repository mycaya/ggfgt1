const express = require('express');
const app = express();

//brings in a file named index from routes folder
const index = require('./routes/index');
//..uses the routes in that file, with no prefix
app.use('/', index);

var port = 8080;

app.listen(port, () => console.log('astarter-api is listening on: ' + port));