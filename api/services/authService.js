const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const users = require("../models").users


const smtpEndpoint = "smtp.sendgrid.net";
const port = process.env.SMTP_PORT
const senderAddress = process.env.SENDER_ADDRESS
const smtpUsername = process.env.SMTP_USERNAME
const smtpPassword = process.env.SG_APIKEY
const saltRounds = 10



const  sendRegEmail= async (email, code) => {
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

module.exports = {
    sendRegEmail,
    hashPassword,
    existingUser,
    regError
};
