const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const {connectDB}  = require("./database/db")




const app = express()

connectDB()

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is LIVE and running on PORT :: ${port}`);
})