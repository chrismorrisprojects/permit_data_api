const express = require('express');
const router = express.Router();
const ctrlUic = require('../controllers/uicData');

router
    .route('/uic').get(ctrlUic.getUic)

module.exports = router;
