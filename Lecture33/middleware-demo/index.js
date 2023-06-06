const express = require('express')
const app = express();
const color = require("colors")
const port = 5000

app.use((req,res,next)=>{

    console.log("MY FIRST MIDDLEWARE".red);
     return next()

console.log( " this is my line after first middleware")

})

app.use((req,res,next)=>{

    console.log(" Second MiddleWare".red);

    req.username =  "naman";
    next()
})

app.get("/show", (req,res)=>{

    const {username} = req;

    res.send(`response send successfully ${username}`)
})

const verify = (req,res,next)=>{

      const {password} = req.query;

      if(password === "12345"){

        return next();
      }

      res.send("invalid password dediya hai")
    
}

app.get("/secret",verify,cndkncdc,bcjdbcdjbcdj, (req,res)=>{

    res.send("this is some secret/sensitive information")

})


app.listen(port, () => console.log(`Example app listening at http://localhost:5000`))