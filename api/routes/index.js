const express = require('express');
const router = express.Router();
const ctrlRrcUic = require( '../controllers/uicData')
const ctrlAuth = require('../controllers/auth')


router
    .route('/uic')
    .get(ctrlRrcUic.uicQuery);

router
    .route('/register')
    .post(ctrlAuth.register)

router
    .route('/login')
    .post(ctrlAuth.login)




module.exports = router;
