const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.post('/dang-ky', siteController.register);
router.get('/ve-positive', siteController.aboutUs);
router.get('/', siteController.index);

module.exports = router;