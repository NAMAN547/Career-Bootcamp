

// // // console.dir(document);

// // // console.log(document.URL);
// // // console.log(document.title)

// // // document.title="123"
// // // console.log(document.title)

// // // console.log(document.all[12].children[0].textContent)

// // // document.all[12].children[0].textContent = " John does list"

// // // console.log(document.all[21].textContent)

// // // document.all[21].innerText = "add some more content"

// // // console.log(document.body.childNodes)

// // // console.log(document.body.children);



// // // Target elements inside DOM

// // let mainHeader = document.getElementById("header-title");

// // // console.log(mainHeader.children)
// // console.log(mainHeader.textContent)

// // // mainHeader.textContent="this is new list name";

// // // mainHeader.innerHTML = "<p> this is a nested paragraph</p>"


// // console.log(mainHeader.style.backgroundColor="red");


// // Object.assign(mainHeader.style,{backgroundColor:"aqua",color:"black",fontSize:"30px"})



// // // GetElementByClassName

// // let liContent = document.getElementsByClassName("list-group-item")

// // console.log(liContent);

// // for(let ele = 0; ele < liContent.length;ele++){

// //     console.log(liContent[ele].style.color="blue")
// // }

// // //GetElementTagName

// // // let inputElement = document.getElementsByTagName("input")

// // // console.log(inputElement[1].style.backgroundColor="yellow")


// // // Queryselector

// // // let inputElement = document.getElementsByClassName("list-group-item")
// // let inputElement = document.querySelector(".list-group-item")

// // console.log(inputElement.textContent)



// // Traverse a DOM



// let ulElement = document.querySelector("#items")

// // console.log(ulElement.firstElementChild.nextElementSibling.textContent)


// let firstElement = document.querySelector("#first-li")


// console.log(firstElement.parentElement.parentElement.style.backgroundColor="red")




// // create Element


// let newDivContainer = document.createElement("div")

// console.log(newDivContainer)

// let addSomeText = document.createTextNode("this is some content inside div container")

// // console.log(div)

// newDivContainer.appendChild(addSomeText);


// let referrenceElement = document.querySelector(".card-body")

// // console.log(appendParentElement)


// // appendParentElement.appendChild(newDivContainer)


// let headerElement = document.querySelector("#main-header")

// let parentElement = document.getElementsByClassName("container")

// console.log(parentElement)

// parentElement[1].insertBefore(newDivContainer,referrenceElement );


// let bodyElement = document.getElementsByTagName("body")

// console.log(bodyElement)

// bodyElement[0].appendChild(newDivContainer)




// // EVENTS '

// let btn = document.querySelector("button");

// // console.log(btn);

// btn.addEventListener("click",(event)=>{

//     btn.className="btn";
//     // console.log(btn)

//     btn.style.backgroundColor="red"
//     btn.textContent="Submit button"

// })


let formElement = document.querySelector("form")

let ulElement = document.querySelector("#items")

// console.log(formElement);

formElement.addEventListener("submit",(e)=>{

    e.preventDefault()

    // console.log(e.target[0].value);

    let newLi = document.createElement("li")

    newLi.className="list-group-item"

    // console.log(newLi);

    newLi.append(e.target[0].value)

    // console.log(newLi);

    ulElement.append(newLi)


})


