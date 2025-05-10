const User = require("../models/User")
const bcrypt = require('bcryptjs')
const {sendMail} = require("../utils/Email")
const {generateOtp} = require("../utils/OtpGenerator")
const Otp = require('../utils/OtpGenerator')
const {protectUser} = require('../utils/ProtectUser')
const {generateToken } = require('../utils/OtpGenerator')
const PasswordReset = require('../models/PasswordReset')


exports.signup = async(req,res) => {
    try {
        const existingUser = await User.findOne({
            email: req.body.email
        })

        if(existingUser) {
            return res.status(400).json({
                message: "User already exists!!"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        req.body.password = hashedPassword

        const createUser = new User(req.body)
        await createUser.save()

        const secureInfo = protectUser(createUser)
        const token = generateToken(secureInfo)

        res.cookie('token', token, {
            sameSite: process.env.PRODUCTION === 'true' ? "None" : 'Lax',
            maxAge: new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000))),
            httpOnly: true,
            secure: process.env.production==='true' ? true : false
        })
        res.status(201).json(protectUser(createUser))
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"ERROR SIGNING UP, PLEASE TRY AGAIN LATER"
        })
    }
}