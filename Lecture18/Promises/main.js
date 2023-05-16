

const p = new Promise((resolve,reject)=>{

    let randomNumber = Math.floor(Math.random()*10);


    if(randomNumber % 2 === 0){

       resolve(randomNumber)
    }else{

        reject()
    }
})

p.then((data)=>{

    console.log(data);

    let sum = data + 10;

    return sum;

}).then((sum)=>{

    console.log(sum)

}).catch((err)=>{

    console.log("not an even number")

})


