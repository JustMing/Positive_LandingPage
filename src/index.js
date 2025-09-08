const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const app = express();
const moment = require('moment');
require('dotenv').config();

const port = process.env.PORT;
const secretKey = process.env.JWT_SECRET_KEY;


const route = require('./routes');
const db = require('./config/db');
const { log } = require('console');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('common'));

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        eq: (a, b) => a === b,
        formatDate: (date) => {
            return moment(date).format('DD-MM-YYYY');
        },
        uFormatDate: (date, format) => {
            return moment(date).format(format);
        },
        getEnv: (key) => process.env[key]
    }
}));
app.set('view engine', 'hbs');

//path dir
app.set('views', path.join(__dirname, 'resources/views'));


//routes
route(app);

app.listen(port, () => console.log(`Currently listening at port ${port}`));