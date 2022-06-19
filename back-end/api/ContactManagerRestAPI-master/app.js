var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

require('./models/db');

var indexRouter = require('./routes/index');

var app = express();

({ message: 'Client created' });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000)
app.use('/api', indexRouter);
module.exports = app;