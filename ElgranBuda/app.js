/**
 * Este archivo contiene la configuración del servidor de Express 
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Encriptado de la contraseña
require('dotenv').config({
  path: './environments/development.env'
 });
 
// Conexión a la base de datos en mongo
mongoose.connect(process.env.MONGODB_URI).then(()=> {
  console.log('Conexión con Mongo');
}).catch(err => {   
  console.log(err);    
});

// Configuración del motor gráfico
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la aplicación
app.use('/', require("./routes/index.js"));
app.use("/", require("./controllers/postUser"));
app.use("/", require("./controllers/postLogin"));
app.use("/", require("./controllers/getUsers"));

// Manejo de errores
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
