const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const users = require("../models").users
const jose = require('jose')
const {
    webcrypto: {
        subtle,
    },
    KeyObject,
} = require('crypto');


const smtpEndpoint = "smtp.sendgrid.net";
const port = process.env.SMTP_PORT
const senderAddress = process.env.SENDER_ADDRESS
const smtpUsername = process.env.SMTP_USERNAME
const smtpPassword = process.env.SG_APIKEY
const jwtSecret = JSON.parse(process.env.JWT_SECRET)
const saltRounds = 10
const expires = "1h"


const sendRegEmail= async (email, code) => {
    try {
        let toAddress = email;
        let subject = "Verify your email";
        let body_html = `<!DOCTYPE> 
        <html>
          <body>
            <p>Your authentication code is : </p> <b>${code}</b>
          </body>
        </html>`;
        // Create the SMTP transport.
        let transporter = nodemailer.createTransport({
            host: smtpEndpoint,
            port: port,
            secure: true, // true for 465, false for other ports
            auth: {
                user: smtpUsername,
                pass: smtpPassword,
            },
        });
        // Specify the fields in the email.
        let mailOptions = {
            from: senderAddress,
            to: toAddress,
            subject: subject,
            html: body_html,
        };
        let info = await transporter.sendMail(mailOptions);
        return { error: false };
    } catch (error) {
        console.error("send-email-error", error);
        return {
            error: true,
            message: "Cannot send email",
        };
    }
}

const hashPassword = async (password) => {
    let returnHash
   await bcrypt.hash(password, saltRounds).then(function(hash) {
       returnHash = hash
    })
   .catch((error) =>{
       console.log(error)
    })
    return returnHash

}

const existingUser = async(regEmail) => {
    try {
        const userCollection = await users.findAll({
            where: {
                email: regEmail
            }
        })
        if (userCollection.length > 0){
            return true
        } else{
            return false
        }
    } catch (e) {
        console.log(e)

    }
}

const regError = async(errType) => {
    console.log(errType)
}

const generateJwt = async(email, userId) => {
    try{
        const keyObject = await jose.importJWK(jwtSecret, 'HS256')
        const jwt = await new jose.SignJWT({ email: email, jti: userId })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setIssuer('http://ogdatadb.com')
            .setAudience('http://ogdatadb.com/api/')
            .setExpirationTime(expires)
            .sign(keyObject)
        return {error: false, token: jwt}
    } catch (error) {
        console.log(error)
        return { error: true };
    }
}

const validateToken = async(token) => {
    const keyObject = await jose.importJWK(jwtSecret, 'HS256')
    let valid = false
    await jose.jwtVerify(token, keyObject, {
        issuer: 'http://ogdatadb.com',
        audience: 'http://ogdatadb.com/api/'
    }).then(result => {
        valid = true
    }).catch(error => {
        valid = false
    })
    return valid
}

const checkToken = async(req, res, next) =>{
    let token = req.body.token
    let validToken = await validateToken(token)
    if (validToken){
        next()
    } else{
        let msg = {
            message: "invalid token"
        }
        res.status(401).json(msg)
    }
}

module.exports = {
    sendRegEmail,
    hashPassword,
    existingUser,
    regError,
    generateJwt,
    validateToken,
    checkToken
};
