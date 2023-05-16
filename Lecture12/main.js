

// // // // // // console.log("hello world!")


// // // // // // Variables in JS

// // // // //  a = 10;  // by default var

// // // // // // var a = 10;

// // // // // // let message;

// // // // // // message = "string"

// // // // // // console.log(message);

// // // // // // messsage = "john doe";

// // // // // // let message = "john doe"

// // // // // // let name = "naman";



// // // // // // console.log(a)


// // // // // var user = "naman";

// // // // // let userName = "johndoe";

// // // // // username = "kartik"
// // // // // console.log(username)

// // // // // user = "john"

// // // // // var age = 26;

// // // // // let isMale = false

// // // // // console.log( user, typeof user);

// // // // // console.log(age , typeof age);

// // // // // console.log( isMale , typeof isMale)




// // // // let name = "naman";


// // // // let username;

// // // // username = name;

// // // // console.log( username)




// // // console.log( NaN ** 0);

// // // let bigNumber = 123456789321212213233123213n;

// // // console.log(bigNumber);


// // // let message = "hello world";

// // // message = 'welcome to js';

// // // message = `the sum of two numbers is: ${ 2 + 2}`;

// // // console.log(message)

// // // let name = "naman"

// // // let message = `welcome back ${ 2 *2 }}`;

// // // console.log(message);



// // // let name = true;

// // // console.log( name, typeof name);

// // // let age = 100;

// // // age = null;

// // // let age = 100;

// // // age = null;

// // // console.log(age)


// // // let user = {

// // //     name: "naman",

// // //     age: 26

// // // }

// // // console.log(user , typeof user);



// // // Function in javascript 


// // // Function 

// // printMessage();

// // function printMessage() {

// //     let num1 = 10;

// //     let num2 = 20

// //     let sum =  num1 + num2;

// //     console.log(sum)

// //     return sum;
        
// // }






// // // function expression

// // // addTwoNumber();


// // // let addTwoNumber = function(){

// // //     console.log("hello world")


// // // }


// // // Arrow Function

// // let fun1 = (a,b)=> a+b;



// // let fun1 = function(a,b){


// //     return a + b;
// // }





// // Scope of Variable 




// // global scope

// // let a = 10;

// // console.log(a);



// // function print(){

// //     console.log(a)
// // }

// // print();


// // function scope


// function printVal(){

//      let a = 10;
//     console.log(a);

//     var b = 20;

//     console.log(b);

//     if(true){

//         let c= 30 ;

//         const d = 40;

//         var e = 50;

//         console.log(d)
        
//     }

//     console.log(d);
    
// }


// printVal();


function first(){

    console.log("first")

    second()
}

function second(){

    console.log("second")

    third();
}

function third(){

    console.log("third")
}

first();












