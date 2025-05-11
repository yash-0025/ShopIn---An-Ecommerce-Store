const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const { connectDB } = require("./database/db")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const morgan = require("morgan")

//Routes imports

const authRoutes = require("./routes/AuthRoutes")
const userRoutes = require("./routes/UserRoutes")
const productRoutes = require("./routes/ProductRoutes")





const app = express()
app.use(express.json())
app.use(cookieParser())
// app.use(cors())

// SET to tiny for production to reduce logs so it will  use less disk space with logs also we can use dev for debuggin while development
app.use(morgan("combined"))


connectDB()


// ROUTES SECTION
app.use("/auth",authRoutes);
app.use("/users",userRoutes)
app.use("/products",productRoutes)

app.get("/",(req,res) => {
    res.status(200).json({
        message: "Everything working fine"
    })
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is LIVE and running on PORT :: ${port}`);
})