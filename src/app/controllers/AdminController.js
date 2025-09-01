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

    //[GET] /admin/tuyen-dung
    jobs(req, res, next) {
        const search = req.query.search || '';

        let filter = {};
        if (search) {
            filter.title = { $regex: search, $options: "i" };
        }

        Job.find(filter).lean()
            .then(jobs => res.render('admin/jobs', {jobs, layout: 'admin_layout.hbs' }))
                .catch(err => next(err));
    }
}

module.exports = new AdminController;