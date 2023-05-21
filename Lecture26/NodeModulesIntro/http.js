

const http = require("http");

const server = http.createServer((req,res)=>{

    // console.log(req);

    if(req.url === "/" ){


      
    }

    if(req.url === "/product" ){

        res.write("welcome to http module")
        res.write("")

        res.end()
    }
    if(req.url === "/about"){

        res.write(` <h1> this is a h1 tag</h1>`)

        res.end()
    }

    res.end(" this is not a valid route!")


})

server.listen(5000)