const User = require('../models/User');

class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /ve-positive
    aboutUs(req, res) {
        res.render('about', { layout: 'subMain.hbs' });
    }

    //[POST] /dang-ky
    register(req, res) {
        const { phone, email } = req.body;

        const phoneRegex = /^(?:\+84|0)(?:3[2-9]|5[2689]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!phoneRegex.test(phone) || !emailRegex.test(email)) {
            return res.render('home', {notify: 'SĐT hoặc địa chỉ email không hợp lệ', scrollTo: 'dang-ky'});
        };
        const user = new User(req.body);
        user.save();

        res.render('home', {notify: 'Đăng ký thành công, chúng tôi sẽ liên hệ tới bạn trong thời gian sớm nhất', scrollTo: 'dang-ky'});
    }
}

module.exports = new SiteController;