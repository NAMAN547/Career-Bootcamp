const express = require("express");
const app = express()
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


const users = {}



app.use("/", express.static(path.join(__dirname, "public")));

io.on("connection",(socket)=>{

    socket.on("send-msg",(data)=>{

        // console.log(`data from ${socket.id} ${data.msg}`);

        io.emit("recieved-msg", {

            msg : data.msg,
            username: users[socket.id]
        })
    })

    
socket.on("login",(data)=>{

    users[socket.id]=  data.username;
})


})






const port = 3000
server.listen(port, ()=>{

    console.log(`chat server is working at port ${port}`)

} )