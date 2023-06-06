const express = require('express')
const app = express()
const port = 3000
var cookieParser = require('cookie-parser')

app.use(cookieParser("dcjdncjncnskjndkjnd"))

app.get("/signedcookie", (req,res)=>{

 res.send(req.signedCookies)

})


app.get("/setcookie",(req,res)=>{

    res.cookie("name", "naman", {signed: true})
    .cookie("mode", "light")
    .cookie("location", "delhi", {maxAge: 7*24*60*60*1000, httpOnly: true, secure:true})
    res.send("this is a response successfully addign a cookie")

})









app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))