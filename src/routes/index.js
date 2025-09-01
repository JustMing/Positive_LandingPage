const jobsRouter = require('./jobs');
const siteRouter = require('./site');
const adminRouter = require('./admin');

function route(app) {

    app.use('/admin', adminRouter);

    app.use('/tuyen-dung', jobsRouter);

    app.use('/', siteRouter);

}

module.exports = route;