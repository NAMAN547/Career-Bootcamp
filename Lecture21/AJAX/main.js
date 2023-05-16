

// yeh object bnaya hai ajax request bhejne ke liye

const xhr = new XMLHttpRequest();

xhr.onload = function(){

    let ul = document.getElementById("catfacts");

    let jsonData = this.response;

    let catFacts = JSON.parse(jsonData);

    console.log(catFacts)

    for(let fact of catFacts){

        let li = document.createElement("li");

        li.appendChild(document.createTextNode(fact.text));

        ul.append(li)
     
    }
}

xhr.onerror = function(){

    console.log("error aagya")
}

//request bhejne ke liye url set kar diya

xhr.open("get","https://cat-fact.herokuapp.com/facts");


let btn = document.getElementsByTagName("button");

btn[0].addEventListener("click",(e)=>{

    xhr.send();

})


