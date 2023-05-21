
const express = require("express");
const app = express();



app.get("/r/:subreddit", (req,res)=>{

    // console.log(req)

       const {subreddit} = req.params;

       // database logic

       res.send(` you are watching ${subreddit} subreddit `)

})

app.get("/user/:username",(req,res)=>{

      const {username} = req.params;

      res.send(` your are viewing ${username} profile`)

})

app.get("/post/:postId/comments/:commentId",(req,res)=>{

    const {postId, commentId} = req.params;

    res.send(`  you are commenting on the post ${postId} with the commentId as ${commentId} `)

})

app.get("/search", (req,res)=>{

    const { q } = req.query;

    res.send(` you are searching for this ${q} post`)

})



app.listen("3000",(req,res)=>{

    console.log("server running at port 3000")
})

