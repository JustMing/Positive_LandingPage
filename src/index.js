const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('common'));

app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//path dir
app.set('views', path.join(__dirname, 'resources/views'));


//routes
route(app);

app.listen(port, () => console.log(`Currently listening at port ${port}`));