const express = require('express');
const app = express()
const path = require("path")
const port = 3000;
const { v4: uuid } = require('uuid');
const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

const comments = [

    {   id: uuid(),
        user: "kartik" ,
        text: "this is new comment by kartik bhaiya"
    },

    {   id: uuid(),
        user: "Arun" ,
        text: " CSK ipl jeetegi"
    },
    {   id: uuid(),
        user: "Naman" ,
        text: " bhiaya IPL tumhara fixed/ sattebaazi pe work krta hai"
    },
];

// list all the comments

app.get("/comments", (req,res)=>{

    res.render("index", {comments})

})

// display a form to add a comment

app.get("/comments/new", (req,res)=>{

    res.render("new")
})


// Create a new comment

app.post("/comments", (req,res)=>{

      const {user, text} = req.body;

      comments.push({id: uuid(), user, text})

      res.redirect("/comments");
})


// Show one comment

app.get("/comments/:commentid", (req, res)=>{

    const {commentid} = req.params;

      const comment = comments.find((comment)=> comment.id === commentid);

     res.render("show", {comment})

})

// get edit form for updating values

app.get("/comments/:commentid/edit",(req,res)=>{

    const {commentid} = req.params;

    const comment = comments.find((comment)=> comment.id === commentid);

    res.render("edit", {comment})

})

//update comment with the commentid

app.patch("/comments/:commentid", (req,res)=>{

    const {commentid} =  req.params;
    const comment = comments.find((comment)=> comment.id === commentid);

    console.log(req.body);
     comment.user = req.body.user;
    comment.text =  req.body.text;

    res.redirect("/comments")

})







app.listen(port, () => console.log(`Server listening at http://localhost:3000`))