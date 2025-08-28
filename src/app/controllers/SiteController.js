
class SiteController{

    //[GET] /
    index(req, res) {
        res.render('home');
    }

    aboutUs(req, res) {
        res.render('about');
    }

}

module.exports = new SiteController;