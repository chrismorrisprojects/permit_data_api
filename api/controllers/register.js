const users = require("../models").users
const authSvc = require("../services/authService");
const { Sequelize, Model, DataTypes } = require("sequelize");

const register = async (req, res) => {
    try {
        const {
            regFirst,
            regLast,
            regOrg,
            regEmail,
            regPass,
            regConfirmPass,
            regAddress,
            regPhoneNumber,
        } = req.body
//        await authSvc.regError("invalid email or password")
        const exists = await authSvc.existingUser(regEmail)
        if (exists){
           await authSvc.regError("Email already exists")
        }
        if (regPass.valueOf() !== regConfirmPass.valueOf()){
            await authSvc.regError("passwords do not match")
        }
        const hash = await authSvc.hashPassword(regPass);
        const code = Math.floor(100000 + Math.random() * 900000);  //Generate random 6 digit code.
        const expiry = new Date(Date.now() + 60 * 1000 * 15).toISOString();  //Set expiry 15 mins ahead from now
        const createdDate = new Date(Date.now()).toISOString();
        const modifiedDate = new Date(Date.now()).toISOString();
        const sendCode = await authSvc.sendRegEmail(regEmail, code);
        const newUser = users.build({
            firstName: regFirst,
            lastName: regLast,
            org: regOrg,
            email: regEmail,
            password: hash,
            created: createdDate,
            modified: modifiedDate,
            address: regAddress,
            phoneNumber: regPhoneNumber,
            emailToken: code,
            emailTokenExpires: expiry,
            active: false

        })
        await newUser.save();
        return res.status(200).json({
            success: true,
            message: "Registration Success",
        });
    } catch (error) {
        console.error("signup-error", error);
        return res.status(500).json({
            error: true,
            message: "Cannot Register",
        });
    }
};




module.exports={
    register
}
