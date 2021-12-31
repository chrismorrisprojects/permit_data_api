const express = require('express');
const router = express.Router();
const ctrlRrcUic = require( '../controllers/uicData')
const ctrlRegister = require('../controllers/register')


router
    .route('/uic')
    .get(ctrlRrcUic.uicQuery);

router
    .route('/register')
    .post(ctrlRegister.register)



module.exports = router;
