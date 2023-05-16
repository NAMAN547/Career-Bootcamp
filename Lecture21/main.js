

// const fs = require("fs");
// async function abc(){

//   fs.promises.readFile("q.html", "utf-8")

//     console.log(data);
//     console.log("isko print krao");


//     return " resolve ho chuka hai"

// }

//   let p1 =  await abc();
//   console.log(p1)




//    async function abc(){

//     console.log("hello ")
//     throw "abc"

// }

// let temp = abc();

// console.log(temp)

// function abc(){

//     return new Promise((res,rej)=>{

//         console.log("hello");

//         res("abc")
//     })
// }

// let temp = abc();

// console.log(temp)


// Await Keyword





// convert to promises

// function abc(){

//     return new Promise((res,rej)=>{


//         fs.promises.readFile("q.html", "utf-8").then((data)=>{

//               console.log(data);
//               console.log("isko print krao");

//               res("resolve")

//         })
//     })
// }


// abc().then((message)=>{

//     console.log(message)
// })

const fs = require("fs")

function abc(){

    return new Promise((res,rej)=>{

        fs.promises.writeFile("q.html", "this is a string which is added").then(()=>{

            console.log(" q.html file has been written");

        }).catch((err)=>{

            console.log(err)
        })



        fs.promises.readFile("q.html", "utf-8").then((data)=>{

            console.log(data);  
        })

          res(" both work is done")

    })
}

abc().then((data)=>{

    console.log(data)


})






