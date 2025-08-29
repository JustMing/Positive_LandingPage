const jobsRouter = require('./jobs');
const siteRouter = require('./site');

function route(app) {

    app.use('/tuyen-dung', jobsRouter);

    app.use('/', siteRouter);

}

module.exports = route;