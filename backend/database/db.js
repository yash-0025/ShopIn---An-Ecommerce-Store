const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

exports.connectDB = () => {
    // try {
    //     await mongoose.connect(process.env.MONGO_URL,{});
    //     await mongoose.connection.on('connected', () => {
    //         console.log("Database Connected Successfully ....")
    //     })
    // } catch (error) {
    //     console.log("Error Connectin Database ::", error)
    // }

    mongoose.connect(process.env.MONGO_URL, {});
    mongoose.connection.on('connected', () => {
        console.log("Database connected Successfully...")
    })
}