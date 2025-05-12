const Review = require("../models/Review")

exports.createReview = async(req,res) => {
    try {
        const created = await new Review(req.body).populate({path:"user", select:"-password"})
        await created.save()
        res.status(201).json(created)
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            message: "Error Creating a Review"
        })

        
    }
}

exports.getReviewByProductId = async(req,res) => {
    try {
        const {id} = req.params
        let skip = 0
        let limit = 0
        if(req.query.page && req.query.limit) {
            const pageSize = req.query.limit
            const page = req.query.page

            skip=pageSize*(page-1)
            limit=pageSize
        }
        const totalDocs = await Review.find({
            product:id
        }).countDocuments().exec()
        const result = await Review.find({
            product:id
        }).skip(skip).limit(limit).populate('user').exec()

        res.set("X-total-Count", totalDocs)
        res.status(200).json(result)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message:"Error gettin product review usin product id"
        })
    }
}

exports.updateReviewById = async(req,res) =>{
    try{
        const {id} = req.params
        const updated = await Review.findByIdAndUpdate(id, req.body,{new:true}).populate('user')
        res.status(200).json(updated)
    } catch(error){
        console.log(error)
        res.status(500).json({
            message: "Failed to update review"
        })
    }
}

exports.deleteReviewById = async(req,res) => {
    try{
        const {id} = req.params
        const deleted = await Review.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Error deleting review"
        })
    }
}