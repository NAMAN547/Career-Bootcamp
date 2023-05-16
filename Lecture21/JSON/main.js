

// JSON DATATYPES

//BASONN => Boolean, Arrays, String, Object, Null , Numbers

// key : value pairs


const person = {

    name: "john doe",
    age: 24,
    city: "delhi",
    favColors: ["red", "blue", "green"],
    1 : true

}

const JSONdata = JSON.stringify(person)
console.log(JSONdata);

let personObject = JSON.parse(JSONdata)
console.log(personObject)


