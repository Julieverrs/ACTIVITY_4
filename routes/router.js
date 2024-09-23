const express = require('express');
const router = express.Router();

const controller = require('../controller/Controller.js');

router.get('/', controller.index);
//router.get('/about', controller.about);
//router.get('/services', controller.services);
//router.get('/contact', controller.contact);
//router.get('/gallery', controller.gallery);

module.exports = router;

