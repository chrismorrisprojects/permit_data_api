const express = require('express');
const router = express.Router();
const ctrlRrcUic = require( '../controllers/uicData')
const ctrlAuth = require('../controllers/auth')
const authSvc = require("../services/authService")



//async function checkToken(req, res, next){
//    let token = req.body.token
//    validToken = await authSvc.validateToken(token)
//    if (validToken){
//        next()
//    } else{
//        let msg = {
//            message: "invalid token"
//        }
//        res.status(401).json(msg)
//    }
//}

router.post('/register', ctrlAuth.register)

router.post('/login', ctrlAuth.login)

router.post('/activate',ctrlAuth.activate)

router.post('/resetPass', ctrlAuth.resetPass)

router.post('/changePass', ctrlAuth.changePass)


router.get("/uic", authSvc.checkToken, ctrlRrcUic.uicQuery);


module.exports = router;
