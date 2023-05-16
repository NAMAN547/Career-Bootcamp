

// const p = new Promise((resolve,reject)=>{

//     setTimeout(()=>{

//         let randomNumber = Math.floor(Math.random()*10);

//         console.log(randomNumber)

//         if(randomNumber % 2 === 0){

//             resolve("this is a even number"
//             )
//         }
//         else{

//             reject("this is not an evennumber")
//         }
//     }, 3000 )

// })



// p.then((message)=>{

//     console.log(message);


//     return new Promise((resolve,reject)=>{

    
//         setTimeout(()=>{

//             reject("this is our second promise which is resolved after some time")
//         },3000)
 
//     })
// }).then((message)=>{

//     console.log(message)


// })




// const p1 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{

//         resolve(" this is message 3")

//     },6000)
// })


// const p2 = new Promise((resolve,reject)=>{


//     setTimeout(()=>{

//         resolve(" this is message 2")

//     },4000)
// })

// const p3 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{

//         resolve(" this is message 3")

//     },5000)

// })

// const p = Promise.race([p1,p2,p3])

// p.then((messages)=>{

//     console.log(messages)
// })



// const fs = require("fs");



// let readFilePromises = fs.promises.readFile("q1.html", "utf-8");

// readFilePromises.then((data)=>{

//     console.log(data)
// })
// .catch((err)=>{
//     console.log(" file has not been read")
// })




//  const id = setInterval(() => {

//     console.log("hello world");

//     return 1;
 
// },1000 );


// setTimeout(()=>{

//     console.log("timeout")

//     clearInterval(id);
// },5000)

// function outer() {
//     console.log("outer is running")
//     console.log("I am outer");
//     console.log("outer is returning something");
//     return function inner() {
//         console.log("I am inner")
//     }
// }
// let innerRef = outer();
// innerRef();
// function firstName(fname) {
//     console.log("Your first Name is", fname)
//     return function lastname(lName) {
//         console.log(fname + " " + lName);
//     }
// }
// let lastNameFnRef = firstName("Naman");
// console.log("`````````````````````````");
// lastNameFnRef("Tyagi");





// let a = true;

// setTimeout(()=>{

//    a = false;

// },10000)

// while(a){

//     console.log("hello world")
// }


let a = true

setInterval(()=>{

    if(a){

        console.log("hello world")
    }
},1000)

setTimeout(()=>{

    a = false

},10060)