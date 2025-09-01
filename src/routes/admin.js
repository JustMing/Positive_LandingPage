const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/logout', adminController.logout);
router.get('/tuyen-dung', adminController.jobs);
router.get('/', adminController.showLogin);
router.post('/login', adminController.login);

module.exports = router;