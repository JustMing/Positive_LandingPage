const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('common'));

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//path dir
app.set('views', path.join(__dirname, 'resources/views'));


//routes
route(app);

app.listen(port, () => console.log(`Currently listening at port ${port}`));