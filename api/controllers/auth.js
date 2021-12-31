const users = require("../models").users
const authSvc = require("../services/authService");
const bcrypt = require("bcrypt");

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
        console.log(user[0].dataValues)
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

        //Success
        return res.send({
            success: true,
            message: "User logged in successfully",
        });
    } catch (err) {
        console.error("Login error", err);
        return res.status(500).json({
            error: true,
            message: "Couldn't login. Please try again later.",
        });
    }
}




module.exports={
    register,
    login
}
