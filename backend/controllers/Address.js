const Address = require("../models/Address")

exports.createAddress = async(req,res) => {
    try{
        const created = new Address(req.body)
        await created.save()
        res.status(201).json(created)
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            message:"ERror Adding Address, Please try again"
        })
    }
}


exports.getAddressByUserId = async(req,res) => {
    try{
        const {id} = req.params
        const results = await Address.find({
            user:id
        })
        res.status(200).json(results)
    } catch(error){
        console.log(error)
        res.status(500).json({
            message:"Error fetching address, Please try again"
        })
    }
}

exports.updateAddressById = async(req,res) => {
    try{
        const {id} = req.params
        const updated = await Address.findByIdAndUpdate(id, req.body, {new:true})
        console.log(updated)
        res.status(200).json(updated)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Wrror Updating address, please try again"
        })
    }
}



exports.deleteAddressById = async(req,res) => {
    try{
        const {id} = req.params
        const deleted = await Address.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Error deleting  address"
        })
    }
}