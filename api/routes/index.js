const express = require('express');
const router = express.Router();
const ctrlRrcUic = require( '../controllers/uicData')


router
    .route('/uic')
    .get(ctrlRrcUic.uicQuery);


module.exports = router;
