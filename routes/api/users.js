const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/check-token',ensureLoggedIn, usersCtrl.checkToken);

router.post('/', usersCtrl.create);

module.exports = router;