const Job = require('../models/Job');

class JobsController {

    //[GET] /tuyen-dung
    index(req, res) {
        Job.find({}).lean()
            .then(jobs => res.render('jobs/jobs', {jobs, layout: 'subMain.hbs'}))
            .catch(err => next(err));
    }

    //[GET] /tuyen-dung/:slug
    detail(req, res) {
        Job.findOne({slug: req.params.slug}).lean()
            .then(job => res.render('jobs/details', {job, layout: 'subMain.hbs'}))
            .catch(err => next(err));
    }
}

module.exports = new JobsController;