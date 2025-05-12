const Cart = require("../models/Cart")


exports.createCart = async(req,res) =>{
    try{
        const created = await new Cart(req.body).populate({
            path:"product",
            populate:{path:"brand"}
        })
        await created.save();
        res.status(201).json(created)
    } catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Error Adding product to cart."
        })
    }
}


exports.getCartByUserId = async(req,res) => {
    try{
        const {id} = req.params
        const result = await Cart.findById({user:id}).populate({
            path:"product",
            populate:{path:"brand"}
        })
        res.status(200).json(result)
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            message: "Error Fetching User Cart"
        })
    }

}

exports.updateCartById = async(req,res) => {
    try{
        const {id} = req.params
        const updated = await Cart.findByIdAndUpdate(id, req.body, {new:true}).populate({
            path:"product",
            populate:{path:"brand"}
        })
        res.status(200).json(updated)
    } catch(error) {
        console.log(error) 
        return res.status(500).json({
            message: "Updating CArt with ID failed"
        })
    }
}

exports.deleteCartById = async(req,res) => {
    try{
        const {id} = req.params
        const deleted = await Cart.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Error deleting cart with id"
        })
    }
}