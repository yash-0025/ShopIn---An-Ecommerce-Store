const Category = require("../models/Category")

exports.getAllCategory=async(req,res)=> {
    try{
        const result = await Category.find({})
        res.status(200).json(result)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "ERror fetching Categories"
        })
    }
}