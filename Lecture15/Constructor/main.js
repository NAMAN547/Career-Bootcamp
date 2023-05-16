

// Constructor functions

function Person(name, age){

    this.name = name;
    this.age= age;


}

const p1 = new Person("kartik", 24);

const p2 = new Person("naman", 25);




// this keyword


// function fun(){

//     this.name="kartik"

//     console.log(this)
//     console.log(this.name)
//     console.log(this.origin)
// }

// fun()



// explicit binding

const information = {


     name: "amit",
     age:20,
    details : "99999999",
    email: "abcd@gmail.com"

}

const user = {

    name: "raghav",
    age: 30,

    print: function(){

        console.log(this)
        console.log(this.name)
        console.log(this.age)
    }
}

user.print();

// user.print.call(information);

 const f1 = user.print.bind(information)

 f1();




