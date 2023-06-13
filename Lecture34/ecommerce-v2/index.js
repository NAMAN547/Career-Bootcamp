const express = require('express')
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const ejsMate = require("ejs-mate")
const methodOverride = require("method-override");
const session = require('express-session')
const flash = require('connect-flash');
const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/ecomm-careerbootcamp")
.then(()=> console.log("db connected sucessfully".blue))
.catch((err)=> console.log(err));

// const sessionConfig = {

//   secret: 'weneedagoodsecret',
//   resave: false,
//   saveUninitialized: true,
//   cookie : {}


// }



//Routes
  const productRoutes = require("./routes/productRoutes");
  const reviewRoutes = require("./routes/reviewRoutes")


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
// app.use(session(sessionConfig));
// app.use(flash());


// app.use((req,res,next)=>{

//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();

// })


// routes middleware
app.use("/products",productRoutes)
app.use(reviewRoutes)


app.listen(port, () => console.log(`Server listening at http://localhost:5000`.red))