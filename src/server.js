const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

//Inicializaciones

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views')); ///home/alumno/practitioner7/src/viewa
app.engine('.hbs', exphbs({
  defaultLayout : 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares-peticions
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Global Variables

//Routes
app.use(require('./routes/indexroutes'));
app.use(require('./routes/notes.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
