const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/tuyen-dung', newsRouter);

    app.use('/', siteRouter);

}

module.exports = route;