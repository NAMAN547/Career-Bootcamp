const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path")


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/",(req,res)=>{

    res.render("index")
})


app.get("/userdetail", (req,res)=>{

    console.log(req.query)

    res.send("get request completed");

})



app.listen(PORT, (req,res)=>{

    console.log(`server is running at port ${PORT}`)

})