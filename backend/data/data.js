const {brandData} = require("./BrandData")
const {productData} = require("./ProductData")
const {addressData} = require("./AddressData")
const {cartData} = require("./CartData")
const {categoryData} = require("./CategoryData")
const {orderData} = require("./OrderData")
const {reviewData} = require("./ReviewData")
const {wishlistData} = require("./WishlistData")
const {connectDB} = require("../database/db")



const data = async() => {
    try {
        await connectDB()
        console.log("Database connected to send data")
        await brandData()
        await productData()
        await addressData()
        await cartData()
        await categoryData()
        await orderData()
        await reviewData()
        await wishlistData()

        console.log("All data exported to Database")
    } catch(error) {
        console.log(error)
    }
}


data()