const express = require('express')
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const ejsMate = require("ejs-mate")
const methodOverride = require("method-override")
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/ecomm-careerbootcamp")
.then(()=> console.log("db connected sucessfully".blue))
.catch((err)=> console.log(err));

//Routes
  const productRoutes = require("./routes/productRoutes");
  const reviewRoutes = require("./routes/reviewRoutes")


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))


// routes middleware
app.use("/products",productRoutes)
app.use(reviewRoutes)


app.listen(port, () => console.log(`Server listening at http://localhost:3000`.red))