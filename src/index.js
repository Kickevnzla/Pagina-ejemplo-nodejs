// ------------Requirements------------

const express = require('express');

const morgan = require('morgan');

const colors = require('colors');

const path = require('path');

const app = express();

// ------------Requirements------------

// --------------Settings--------------

app.set('appName', 'Primera pagina web con Nodejs');

app.set('port', '3000');

app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

// --------------Settings--------------

// -------------Middlewares-------------



// -------------Middlewares-------------

// ---------------Routes---------------

app.use(require('./routes'));

// ---------------Routes---------------

// ------------Static files------------

app.use(express.static(path.join(__dirname, 'public')));

// ------------Static files------------

// -------------Listening-------------

app.listen(app.get('port'),() =>{
    console.log(app.get('appName'));
    console.log(`Server on port: ${app.get('port')}.` .rainbow);
})

// -------------Listening-------------