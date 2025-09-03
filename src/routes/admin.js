const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/logout', adminController.logout);
router.get('/tuyen-dung', adminController.jobs);
router.get('/nguoi-dung', adminController.users);
router.post('/nguoi-dung/delete/:id', adminController.deleteUser);
router.post('/tuyen-dung/create', adminController.create);
router.post('/tuyen-dung/delete/:id', adminController.delete);
router.post('/tuyen-dung/update/:id', adminController.update);
router.get('/tuyen-dung/:slug', adminController.jobsDetail);
router.get('/', adminController.showLogin);
router.post('/login', adminController.login);

module.exports = router;