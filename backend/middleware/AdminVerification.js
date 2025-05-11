const User = require("../models/User");
const jwt = require("jsonwebtoken")

// ADMIN ROLE FILES ON HOLD

const isAdmin = async(req,res, next) => {
    try{
        const token = req.cookies.auth_token;
        if(!token) throw new Error('No token found')
        if(!req.user) {
            return res.status(401).json({
                message: "NOT AUTHENTICATED"
            })
        }

        const user = await User.findById(req.user._id);
        if(!user.isAdmin) {
            return res.status(403).json({
                message: "Admin access requried"
            })
        }
        next()
    } catch(error){
        console.log(error)
        res.status(500).json({
            message: "Server Failed during Admin Verification"
        })
    }
}

module.exports ={isAdmin}