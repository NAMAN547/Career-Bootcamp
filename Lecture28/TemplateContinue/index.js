const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path")

const todos = [

    "Avatar",
    "Avengers",
    "KGF",
    "Shawshank Redemption",
    "John Wick"
]



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req,res)=>{

    let randomNumber = Math.floor(Math.random()*10);

    res.render("index", {randomNumber})
})

app.get("/todos",(req,res)=>{

    res.render("todos", {todos})


})

app.get("/blog",(req,res)=>{

    res.render("blog")
})




app.listen(PORT, (req,res)=>{

    console.log(`server is running at port ${PORT}`)

})