
const fs = require("fs");

// function cb(err,data){

//     if(!err){

//         console.log(data)
//     }
//     else{

//         console.log(err)
//     }
// }

//  fs.readFile("q1.html", "utf-8", cb);




// Serial readFile

// let count = 0;

// function cb(err,data){

//     count += 1;

//     if(count <=5){

//         if(!err){

//             console.log(data)
//         }
//     }

//     fs.readFile("q" + (count + 1) + ".html" , "utf-8", cb)

// }

// fs.readFile("q1.html", "utf-8", cb)


// parrallel read


function cb(err, data){


    if(!err){

        console.log(data)
    }

    else{
        console.log(err)
    }
}

for(let i = 1; i <=5;i++){

    fs.readFile("q"+ i + ".html", "utf-8", cb)
}