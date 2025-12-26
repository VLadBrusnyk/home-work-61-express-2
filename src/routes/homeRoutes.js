const express = require('express');
const logRequests = require('../middlewares/logRequests');
const { getHome } = require('../controllers/homeController');

const router = express.Router();

router.get('/', logRequests, getHome);

module.exports = router;
