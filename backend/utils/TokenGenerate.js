const dotenv = require("dotenv")
dotenv.config()

const jwt = require("jsonwebtoken")
const PasswordReset = require("../models/PasswordReset")

exports.generateToken = (payload, PasswordReset=false) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET),{
        expiresIn: PasswordReset?process.env.PASSWORD_RESET_TOKEN_EXPIRATION:process.env.LOGIN_TOKEN_EXPIRATION
    }
}