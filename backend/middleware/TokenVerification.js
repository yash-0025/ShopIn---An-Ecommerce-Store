const dotenv = require("dotenv")
dotenv.config();
const jwt = require("jsonwebtoken")
const {portectUser} = require("../utils/ProtectUser")

exports.verifyToken = async(req, res, next) => {
    try{
        const {token} = req.cookies

        if (!token) {
            return res.status(401).json({
                message:"No Token found. Please Login again"
            })
        }

        const decodedInfo = jwt.verify(token, process.env.TOKEN_SECRET)

        if(decodedIndo && decodedInfo._id && decodedInfo.email) {
            req.user = decodedInfo
        } else {
            return res.status(401).json({
                message: "Invalid Token, Please login again"
            })
        }

    } catch(error) {
        console.log(error);
        if(error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                message:"Token expired, Please login again"
            })
        } else if(error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                message: "Invalid Token, Pleae login again"
            })
        } else {
            return res.status(500).json({
                message:"Server ERROR"
            })
        }
    }
}