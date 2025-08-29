const express = require('express');
const router = express.Router();

const jobsController = require('../app/controllers/JobsController');

router.get('/:slug', jobsController.detail);
router.get('/', jobsController.index);

module.exports = router;