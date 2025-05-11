const User = require("../models/User")
const bcrypt = require('bcryptjs')
const { sendMail } = require("../utils/Email")
const { generateOtp } = require("../utils/OtpGenerator")
const Otp = require('../utils/OtpGenerator')
const { protectUser } = require('../utils/ProtectUser')
const { generateToken } = require('../utils/TokenGenerate')
const PasswordReset = require('../models/PasswordReset')
const { token } = require("morgan")


exports.signup = async (req, res) => {
    try {
        const existingUser = await User.findOne({
            email: req.body.email
        })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists!!"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword

        const createUser = new User(req.body)
        await createUser.save()

        const secureInfo = protectUser(createUser)
        const token = generateToken(secureInfo)

        res.cookie('token', token, {
            sameSite: process.env.PRODUCTION === 'true' ? "None" : 'Lax',
            maxAge: new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000))),
            httpOnly: true,
            secure: process.env.PRODUCTION === 'true' ? true : false
        })
        res.status(201).json(protectUser(createUser),)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "ERROR SIGNING UP, PLEASE TRY AGAIN !!"
        })
    }


}

exports.login = async (req, res) => {
    try {
        const existingUser = await User.findOne({
            email: req.body.email
        })
        if (existingUser && (
            await bcrypt.compare(req.body.password, existingUser.password)
        )) {
            const secureInfo = protectUser(existingUser)

            const token = generateToken(secureInfo)

            res.cookie("token", token, {
                sameSite: process.env.PRODUCTION === 'true' ? "None" : "Lax",
                maxAge: new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000))),
                httpOnly: true,
                secure: process.env.PRODUCTION == 'true' ? true : false
            })
            return res.status(200).json(protectUser(existingUser))
        }
        res.clearCookie('token')
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "ERROR WHILE LOGGIN IN, PLEASE TRY AGAIN !!"
        })
    }
}

exports.verifyOtp = async (req, res) => {
    try {
        const isValidUserId = await User.findById(req.body.userId)

        if (!isValidUserId) {
            return res.status(404).json({
                message: "USER NOT FOUND !!"
            })
        }
        const isOtpExisting = await Otp.findOne({
            user: isValidUserId._id
        })
        if (!isOtpExisting) {
            return res.status(404).json({
                message: "OTP NOT FOUND"
            })
        }

        if (isOtpExisting.expiresAt < new Date()) {
            await Otp.findByIdAndDelete(isOtpExisting._id);
            return res.status(400).json({
                message: "OTP has expired"
            })
        }
        return res.status(400).json({
            message: "OTP is INVALID or EXPIRED"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "There is Some ERROR with the OTP Verification"
        })
    }
}

exports.resendOtp = async (req, res) => {
    try {
        const existingUser = await User.findById(req.body.user);
        if (!existingUser) {
            return res.status(404).json({
                message: "USER NOT FOUND !!"
            })
        }
        await Otp.deleteMany({
            user: existingUser._id
        })

        const otp = generateOtp()
        const hashedOtp = await bcrypt.hash(otp, 10);

        const newOtp = new Otp({
            user: req.body.user,
            otp: hashedOtp,
            expiredAt: Date.now() + parseInt(process.env.OTP_EXPIRATION)
        })
        await newOtp.save()

        await sendMail(existingUser.email, `OTP Verification for your Account`, `Your ONE TIME PASSWORD [OTP] for account verification is : <b>${otp}</b>.</br>Do Not share this OTP with anyone for security purposes.`)

        res.status(201).json({
            message: "OTP sent"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Some error occured while resending OTP!!"
        })
    }
}

exports.forgotPassword = async () => {
    let newToken;
    try {
        const isExistingUser = await User.findOne({
            email: req.body.email
        })

        if (!isExistingUser) {
            res.status(404).json({
                message: "You are not a registered user.."
            })
        }

        await PasswordReset.deleteMany({
            user: isExistingUser._id
        })

        const passwordResetToken = generateToken(protectUser(isExistingUser), true)

        const hashedToken = await bcrypt.hash(passwordResetToken, 10)

        newToken = new PasswordReset({
            user: isExistingUser._id,
            token: hashedToken,
            expiresAt: Date.now() + parseInt(process.env.OTP_EXPIRATION)
        })
        await newToken.save()

        await sendMail(isExistingUser.email, 'Password Reset link for your Account', `<p> Dear ${isExistingUser.name}, <p> <a href=${process.env.FRONT_URL}/reset-password/${isExistingUser._id}/${passwordResetToken} target="_blank">Reset Password</a></p> 
        <p>This link is valid for 15 minutes. If you did not request a password reset, please ignore this mail.
        
        Thank you,
        ShopIn Team </p>`)

        res.status(200).json({
            message: `Password Reset link sent to ${isExistingUser.email} successfully!!`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error while sending the mail for password change'
        })
    }
}

exports.resetPassword = async () => {
    try {
        const isExistingUser = await User.findById(req.body.userId)
        if (!isExistingUser) {
            return res.status(404).json({
                message: "User Does not exist"
            })
        }

        const isResetTokenExisting = await PasswordReset.findOne({
            user: isExistingUser._id
        })

        if (!isresetTokenExisting) {
            return res.status(404).json({
                message: "Reset Link is not valid"
            })
        }

        if (isResetTokenExisting.expiresAt < new Date()) {
            await PasswordReset.findByIdAndDelete(isResetTokenExisting._id)
            return res.status(404).json({
                message: "Reset Link has expired"
            })
        }

        if (isResetTokenExisting && isResetTokenExisting.expiresAt > new Date() && (await bcrypt.compare(req.body.token, isResetTokenExisting.token))) {
            await PasswordReset.findByIdAndDelete(isResetTokenExisting._id)

            await User.findByIdAndUpdate(isExistingUser._id, { password: await bcrypt.hash(req.body.password, 10) })
            return res.status(200).json({
                message: "Password Updated Successfully"
            })
        }

        return res.status(404).json({
            message: "Reset Link has been expired"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error while Reseting the password!!"
        })
    }
}

exports.logout = async (req, res) => {
    try {
        res.cookie('token', {
            maxAge: 0,
            sameSite: process.env.PRODUCTION === 'true' ? "None" : "Lax",
            httpOnly: true,
            secure: process.env.PRODUCTION === 'true' ? true : false
        })
        res.status(200).json({
            message: "Logout Successfully"
        })
    } catch(error){
        console.log(error)
    }
}

exports.checAuth = async(req,res) => {
    try{
        if(req.user) {
            const user = await User.findById(req.user._id)
            return res.status(200).json(protectUser(user))
        }
        res.sendStatus(401)
    } catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}