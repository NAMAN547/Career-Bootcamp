const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");



router.get("/register", (req,res)=>{

    res.render("auth/Signup")

})

// router.get("/testUser", async(req,res)=>{

//     const user = new User({username : " naman" , email : "naman@gmail.com" })

//        const newUser = await User.register(user , "12345");

//        res.send(newUser)


// })

// Register a new User

router.post("/register", async(req,res)=>{

    const {username, password, email } = req.body;

    const user = new User({username , email});

    const newUser = await User.register(user, password);

    req.flash("success", `${username.toUpperCase()}, registered Successfully!`)

    res.redirect("/login")
})


router.get("/login", (req,res)=>{

    res.render("auth/Login")
})

router.post("/login", 

    passport.authenticate("local", {
      
        failureRedirect : "/login",
        failureFlash : true ,
        failureMessage:true
  
    }),
    function(req,res){


        req.flash("success", `Welcome back, ${req.user.username.toUpperCase()}!`);

        res.redirect("/products")
    }
)

router.get("/logout", (req,res)=>{


    req.logOut((err)=>{

        if(err) {return next(err)};

        req.flash("success", "Goodbye, see you again!");
        res.redirect("/login")
    })
})






module.exports = router;