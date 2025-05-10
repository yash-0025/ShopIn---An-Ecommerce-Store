const mongooese = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

exports.connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await mongooese.connect.on('connected', () => {
            console.log("Database Connected Successfully ....")
        })
    } catch (error) {
        console.log("Error Connectin Database ::", error)
    }
}