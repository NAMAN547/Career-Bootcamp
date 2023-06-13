const express = require('express')
const app = express()
const port = 5000;
const session = require('express-session')


const sessionConfig = {

    secret: 'weneedagoodsecret',
    resave: false,
    saveUninitialized: true,
    cookie : {}
   
}



app.use(session(sessionConfig));



app.get("/",(req,res)=>{

    res.send("home route")

})


app.get("/setuser", (req,res)=>{

    const {username} = req.query;

    req.session.username = username;

    console.log(req.session)

    res.send("successfully stored data in sessions")

})

app.get("/salutation",(req,res)=>{

      const {username} =  req.session;

      console.log(req.session)

      res.send(`hello, good evening ${username}`)

})


app.listen(port, () => console.log(`Example app listening at http://localhost:5000`))