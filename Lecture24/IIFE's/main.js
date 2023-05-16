// (function(){

//     let a = 23;
//     let b = 2;

//     let sum = a+ b;

//     console.log(" the result is :" + sum);

// })();

//////


// function print(){

//     console.log(" 2^3 : " + Math.pow(2,3)) 
//     console.log(" 3^4 : " + Math.pow(3,4));
//     console.log(" root(9) :" + Math.sqrt(9))

// }

// console.log(print())

(function(l,p,r){

    l(" 3^4 : " + p(3,4))
    l(" 2^3 : " + p(2,3))
    l(" root(9) :" + r(9))

})(console.log, Math.pow, Math.sqrt);

