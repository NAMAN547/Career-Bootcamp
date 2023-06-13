const express = require('express')
const app = express()
const port = 3000;
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require("./models/User");
const path = require("path");
const session = require('express-session')

mongoose.connect("mongodb://127.0.0.1:27017/auth-demoCB")
.then(()=> console.log("db connected!"));


const sessionConfig = {

  secret: 'this is some secret',
  resave: false,
  saveUninitialized: true,
 
}

const requireLogin = (req,res,next)=>{

    if(!req.session.user_id){

        res.send("you need to login first!")
    }

    next()
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}))
app.use(session(sessionConfig))


app.get("/", (req,res)=>{

    res.send("home route!")
})

app.get("/register", (req,res)=>{

    res.render("signup")

})

app.post("/register", async(req,res)=>{

    console.log(req.body)

      const {username,password} = req.body;

      const salt = await bcrypt.genSalt(13);

      const hash = await bcrypt.hash(password, salt);

      await User.create({username, hash})

      res.redirect("/login")
})

app.get("/login",(req,res)=>{

    res.render("login")

})

app.post("/login", async(req,res)=>{

     const {username,password} = req.body;


     // check the user with given username
     const foundUser = await User.findOne({username})

     if(!foundUser){

         return res.send("user does not exist")
     }

     // validating passsword

      const validUser = await bcrypt.compare(password, foundUser.hash );


      if(!validUser){

        return res.send("password incorrect")
      }


      //storing the user information(id) inside the sessions object persistant login
      req.session.user_id = foundUser._id;
      req.session.username = foundUser.username

      res.redirect("/dashboard")

})

app.get("/logout",(req,res)=>{

    req.session.destroy();
    
    res.redirect("/login")

})

app.get("/dashboard",requireLogin, (req,res)=>{

    const {username}= req.session;

    res.send(`welcome to the dashboard! ${username}`);

})




app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))