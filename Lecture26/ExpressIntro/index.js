
const express = require("express");
const colors = require("colors");

const app = express()

// console.log(app)


// app.use((req,res)=>{

//     console.log(" application running");

//     res.send(" hello from server");

// })

app.get("/",(req,res)=>{

    res.status(200).send("Home route!")
})


app.get("/product",(req,res)=>{

    res.status(200).send("<h1>you are seeing some products</h1>")
})


app.get("/details",(req,res)=>{

    res.status(200).send({ some: 'json' })
})


app.all("*", (req,res)=>{

    res.status(404).send("oops! file not found or wrong path!")

})

app.listen("8000", (req,res)=>{

    console.log("server is running at port 8000".red)
})
