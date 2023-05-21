const express = require("express");
const app = express();
const path = require("path")

// configure express to templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


const todos = [

    "Avatar",
    "Avengers",
    "KGF",
    "Shawshank Redemption",
    "John Wick"
]

// get request to view my template

app.get("/hello",(req,res)=>{

    res.render("index");

})
app.get("/random",(req,res)=>{

    const randomNumber = Math.floor(Math.random()*10);

    res.render("random", { favNumber: randomNumber})
})

app.get("/todos",(req,res)=>{

    res.render("todos", {todos})

})

app.listen("5000", (req,res)=>{

    console.log("server starting at 5000")

})