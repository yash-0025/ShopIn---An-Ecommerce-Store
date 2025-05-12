const Brand = require("../models/Brand")


exports.getAllBrands = async (req, res) => {
    try {
        const result = await Brand.find({})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error fetching brands"
        })
    }
}

// exports.createBrand = async (req, res) => {
//     try {
//         const existedBrand = await Brand.findOne({name: req.body.name})

//         if (existedBrand) {
//             return res.status(404).json({
//                 message: "Brand already Exists"
//             })
//         }

//         const newBrand = new Brand(req.body)
//         await newBrand.save()
//         return res.status(200).json({
//             message: "Brand Created Successfully",
//             data:newBrand,
//         })


//     }catch(error){
//         console.log(error)
//         return res.status(500).json({
//             message: "Error Creating Brand"
//         })
//     }
// }