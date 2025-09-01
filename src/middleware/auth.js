const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if(!token) {
        return res.redirect('/admin/login');
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {

        if(err) {
            return res.redirect('/admin/login');            
        }
        req.user = decoded;
        next();
    });
}
module.exports = { verifyToken };