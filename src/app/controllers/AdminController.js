const User = require('../models/User');
const Job = require('../models/Job');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AdminController {

    //[GET] /admin
    showLogin(req, res) {
        res.render('admin/login', { layout: '' });
    }

    //[POST] /admin/login
    login(req, res) {
        const { username, password } = req.body;

        if (
            username === process.env.ADMIN_USERNAME
            && password === process.env.ADMIN_PASSWORD
        ) {
            const token = jwt.sign(
                { role: 'admin', username }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            res.cookie('token', token, { httpOnly: true });
            return res.redirect('tuyen-dung');
        }
        res.render('admin/login', { error: 'Sai tài khoản hoặc mật khẩu', layout: '' });
    }

    //[GET] /admin/logout
    logout(req, res) {
        res.clearCookie('token');
        res.redirect('/');
    }

    //[GET] /admin/nguoi-dung
    users(req, res, next) {
      const search = req.query.search || '';

        let filter = {};
        if (search) {
            filter.title = { $regex: search, $options: "i" };
        }

        User.find(filter).lean()
            .then(users => res.render('admin/users', { users, layout: 'admin_layout.hbs' }))
            .catch(err => next(err));
    }

    //[GET] /admin/tuyen-dung
    jobs(req, res, next) {
        const search = req.query.search || '';

        let filter = {};
        if (search) {
            filter.title = { $regex: search, $options: "i" };
        }

        Job.find(filter).lean()
            .then(jobs => res.render('admin/jobs', { jobs, layout: 'admin_layout.hbs' }))
            .catch(err => next(err));
    }

    //[GET] /admin/tuyen-dung/:slug
    jobsDetail(req, res, next) {
        Job.findOne({ slug: req.params.slug }).lean()
            .then(job => res.render('admin/jobDetails', { job, layout: 'admin_layout.hbs' }))
            .catch(err => next(err));
    }

    //[POST] /admin/tuyen-dung/delete/:id
    delete(req, res, next) {
        Job.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/admin/tuyen-dung'))
            .catch(error => next(error));
    }

    //[POST] /admin/tuyen-dung/update/:id
    update(req, res, next) {
        Job.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/tuyen-dung'))
            .catch(error => next(error));
    }

    //[POST] /admin/tuyen-dung/create
    create(req, res, next) {
        const job = new Job(req.body);
        job.save()
            .then(() => res.redirect('/admin/tuyen-dung'))
            .catch(error => next(error));
    }
}

module.exports = new AdminController;