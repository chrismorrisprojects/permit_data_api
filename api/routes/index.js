const express = require('express');
const router = express.Router();
const ctrlRrcUic = require( '../controllers/uicData')
const ctrlAuth = require('../controllers/auth')
const authSvc = require("../services/authService")

router.post('/register', ctrlAuth.register)

router.post('/login', ctrlAuth.login)

router.post('/activate',ctrlAuth.activate)

router.post('/resetPass', ctrlAuth.resetPass)

router.post('/changePass', ctrlAuth.changePass)


router.get("/uic", authSvc.checkToken, ctrlRrcUic.uicQuery);


module.exports = router;
