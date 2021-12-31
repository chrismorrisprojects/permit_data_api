const users = require("../models").users
const authSvc = require("../services/authService");
const bcrypt = require("bcrypt");
let validToken = false

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
}

const login = async(req, res) =>{
    let isValid
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: "Cannot authorize user.",
            });
        }
        //1. Find if any account with that email exists in DB
        const user = await users.findAll({
            where: {
                email: email
            }
        })
        // NOT FOUND - Throw error
        if (!user) {
            return res.status(404).json({
                error: true,
                message: "Account not found",
            });
        }
        //2. Throw error if account is not activated
        if (!user[0].dataValues.active) {
            return res.status(400).json({
                error: true,
                message: "You must verify your email to activate your account",
            });
        }
        //3. Verify the password is valid
        console.log(user[0].dataValues.password)
        console.log(password)
        await bcrypt.compare(password, user[0].dataValues.password)
            .then(function(result) {
            isValid = result;
        })
            .catch(function(error){
                console.log(error)
        })
        if (!isValid) {
            return res.status(400).json({
                error: true,
                message: "Invalid credentials",
            });
        }
        const { error, token } = await authSvc.generateJwt(user[0].dataValues.email, user[0].dataValues.id);
        //Success
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Couldn't create access token. Please try again later",
            });
        }
        user[0].accessToken = token;
        await user[0].save();
        return res.send({
            success: true,
            message: "User logged in successfully",
            accessToken: token
        });
    } catch (err) {
        console.error("Login error", err);
        return res.status(500).json({
            error: true,
            message: "Couldn't login. Please try again later.",
        });
    }
}


const activate = async(req, res) => {
    try {
        const { email, code } = req.body;
        if (!email || !code) {
            return res.json({
                error: true,
                status: 400,
                message: "Please make a valid request",
            });
        }
        const user = await users.findOne({
            where: {
                email: email,
                emailToken: code
            }
             // check if the code is expired
        });
        console.log(user.dataValues)
        if (!user) {
            return res.status(400).json({
                error: true,
                message: "Invalid details",
            });
        } else {
            if (user.dataValues.active)
                return res.send({
                    error: true,
                    message: "Account already activated",
                    status: 400,
                });
            user.emailToken = "";
            user.emailTokenExpires = null;
            user.active = true;
            await user.save();
            return res.status(200).json({
                success: true,
                message: "Account activated.",
            });
        }
    } catch (error) {
        console.error("activation-error", error);
        return res.status(500).json({
            error: true,
            message: error.message,
        });
    }
}

const resetPass = async(req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.send({
                status: 400,
                error: true,
                message: "Cannot be processed",
            });
        }
        const user = await users.findOne({
            where: {
                email: email
            }

        });
        if (!user) {
            return res.send({
                success: true,
                message:
                    "If that email address is in our database, we will send you an email to reset your password",
            });
        }
        let code = Math.floor(100000 + Math.random() * 900000);
        let response = await authSvc.sendRegEmail(email, code);
        if (response.error) {
            return res.status(500).json({
                error: true,
                message: "Couldn't send mail. Please try again later.",
            });
        }

        let expiry = new Date(Date.now() + 60 * 1000 * 15).toISOString();
        user.resetPasswordToken = code;
        user.resetPasswordExpires = expiry; // 15 minutes
        await user.save();
        return res.send({
            success: true,
            message:
                "If that email address is in our database, we will send you an email to reset your password",
        });
    } catch (error) {
        console.error("forgot-password-error", error);
        return res.status(500).json({
            error: true,
            message: error.message,
        });
    }
}

const changePass = async(req, res)=> {
    try {
        const { email, code, newPassword, confirmPassword } = req.body;
        if (!code || !newPassword || !confirmPassword || !email) {
            return res.status(403).json({
                error: true,
                message:
                    "Couldn't process request. Please provide all mandatory fields",
            });
        }
        const user = await users.findOne({
            where: {
                resetPasswordToken: code,
                email: email
            }

        });
        if (!user) {
            return res.send({
                error: true,
                message: "Password reset token is invalid or has expired.",
            });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                error: true,
                message: "Passwords didn't match",
            });
        }
        const hash = await authSvc.hashPassword(newPassword);
        user.password = hash;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        return res.send({
            success: true,
            message: "Password has been changed",
        });
    } catch (error) {
        console.error("reset-password-error", error);
        return res.status(500).json({
            error: true,
            message: error.message,
        });
    }
}




module.exports={
    register,
    login,
    activate,
    resetPass,
    changePass,
}
