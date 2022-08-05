require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

//Import all routes here
const home = require('./routes/home');
const user = require('./routes/user');
const blog = require('./routes/blog');

const app = express();

//CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookies and file upload middleware
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

//morgan middleware
app.use(morgan('tiny'));

//Router middleware
app.use('/api/v1', home);
app.use('/api/v1', user);
app.use('/api/v1', blog);

app.use(express.json());

module.exports = app;
