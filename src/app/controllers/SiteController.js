const User = require('../models/User');

class SiteController{

    //[GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /ve-positive
    aboutUs(req, res) {
        res.render('about', {layout: 'subMain.hbs'});
    }

    //[POST] /dang-ky
    register(req, res) {
        const user = new User(req.body);
        user.save();

        res.send('Saved');
    }
}

module.exports = new SiteController;