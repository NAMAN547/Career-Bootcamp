const express = require('express')
const app = express()
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const Movie = require("./models/Movie")

mongoose.connect("mongodb://127.0.0.1:27017/movies-recomm")
.then(()=> console.log("connection open!"))
.catch((err)=> console.log(err));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res)=>{

    res.render("index")

})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))