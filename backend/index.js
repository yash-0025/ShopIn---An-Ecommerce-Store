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
const brandRoutes = require("./routes/BrandRoutes")
const categoryRoutes = require("./routes/CategoryRoutes")
const addressRoutes = require("./routes/AddressRoutes")
const cartRoutes= require("./routes/CartRoutes")
const wishlistRoutes = require("./routes/WishlistRoutes")
const reviewRoutes = require("./routes/ReviewRoutes")
const orderRoutes = require("./routes/OrderRoutes")



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
app.use("/brands",brandRoutes)
app.use("/categories",categoryRoutes)
app.use("/address", addressRoutes)
app.use("/cart", cartRoutes)
app.use("/wishlist", wishlistRoutes)
app.use("/reviews", reviewRoutes)
app.use("/orders",orderRoutes)

app.get("/",(req,res) => {
    res.status(200).json({
        message: "Everything working fine"
    })
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is LIVE and running on PORT :: ${port}`);
})