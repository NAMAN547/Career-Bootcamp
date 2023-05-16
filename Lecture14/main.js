


// // // // // // let num = "FE";

// // // // // // console.log(parseInt(num, 16))


// // // // // // STRINGS IN JAVASCRIPT

// // // // // let str = "this is a string";

// // // // // console.log(str[0])

// // // // // console.log(str.length);

// // // // // console.log(str.at(-1));

// // // // // for(let char of str){

// // // // //     console.log(char)
// // // // // }



// // // // let str = "this is a string is";

// // // // // console.log(str.indexOf("is", 5))

// // // // let pos = 0;

// // // // while(true){

// // // //     let foundPosition = str.indexOf("is", pos );

// // // //     if( foundPosition == -1) break;

// // // //     console.log(`position of "is" are : ${foundPosition}`);

// // // //     pos = foundPosition + 1;

// // // // }

// // // // str[1] = "t";

// // // // console.log(str[1]);


// // // // let str1 = "is a string";


// // // // if(str1.indexOf("is") != -1){

// // // //     console.log(" we have found the substring")
// // // // };


// // // // console.log(str1.includes("is"));


// // // // console.log(str.slice(2,6));


// // // // // console.log(str.substring(2,6))
// // // // // console.log(str.substring(6,2))


// // // // // console.log(str.substr(0, 5));

// // // // console.log( "a" > "A")

// // // let string = ""

// // // for(let i = 65; i <=150; i++ ){

// // //     string += String.fromCodePoint(i)
// // // }

// // // console.log( "}" > "z")

// // // console.log(string)



// // // //Arrays in Javascript

// // let arr = ["string", 24, true , function(){console.log("hello world")}]

// // // console.log(arr[3]());

// // // console.log(arr[1])


// // // arr[1] = 25;

// // // console.log(arr);


// // console.log(arr);

// // arr.push("mango");

// // console.log(arr)


// // arr.pop();
// // console.log(arr)

// // arr.unshift("grapes")
// // console.log(arr)

// // arr.shift()
// // console.log(arr);

// // const newArr = [1,2,3,4]

// // newArr.push("mango")


// // // newArr = [1,2,34,5]

// // console.log(newArr);



// // for(let item of arr){

// //     console.log(item)


// // }


// let arr = [1,2,4,5,6,7,8,9]

// // for(let num of arr){

// //     console.log(num)
// // }

// // // delete arr[1]

// // console.log(arr);

// // const newArr = new Array(200);

// // console.log(newArr)



// // console.log(arr.splice(-3 , 0 , "mango", "grapes" ));

// // console.log(arr.slice(0,4))

// // console.log(arr)



// // console.log(arr.concat([10,11] , [12,13]));


// // console.log(arr.forEach((ele,pos, arr )=> {

// //     console.log(` the items are ${ele} ,at position ${pos}, in array ${arr}`)

    
// // }))


// const objectArr = [

//     {
//         name: "naman",
//         age: 24,
//         city: "new delhi"
// },
// {
//     name: "john",
//     age: 21,
//     city: "new delhi"
// },
// {
//     name: "kartik",
//     age: 58,
//     city: "new delhi"
// },

// ]


// // console.log(objectArr.find((item)=> item.name == "naman"))


// // console.log(objectArr.filter((item)=> item.age <= 30));



// // let newArr = [1]

// // console.log(newArr.map((x)=> x*x));

// // console.log(arr);


// // console.log([1,2,3,4,5,6,7,8,9].filter((x)=> x % 2 === 0 ));


// // let sortArr = [1,2,3,4,10,12,20]

// // sortArr.sort((a,b)=> b-a);

// // console.log(sortArr);


// console.log(arr.reduce((sum , curr)=> sum + curr, 0))

// console.log( [] == [])

// let arr = [1,2,3]

// console.log(arr.concat([4,5,6]))

// console.log(arr)




// Objects 


const person = {

    "name": "naman",
      "age": 24,
      "favColour": "red",
      printfn: function(){
        
        console.log("hello world")
      }
      ,

      true: "orange",

      "this is a key": true

}

// console.log(obj["this is a key"]);

// console.log(Object.keys(person));

// console.log(Object.values(person));


// for(let key in person){

//     console.log(person[key])


// }

// person["city"] = "new delhi";

// delete person["city"]

// console.log(person);

let obj1 = {

    name: "naman",
    age : 24
}

let obj2 = obj1 ;

obj1 = null;


console.log( obj1 === obj2)