


let btn = document.querySelector(".btn-block")

let mouseEvents = document.getElementById("mouseevents")

// mouseEvents.addEventListener("mouseenter", addevent)

// mouseEvents.addEventListener("mouseleave",addevent)
// // mouseEvents.addEventListener("mouseover",addevent)
// mouseEvents.addEventListener("mouseout",addevent)


// mouseEvents.addEventListener("mousedown", addevent)

// mouseEvents.addEventListener("mouseup", addevent)



let inputElement = document.querySelectorAll('input[type="text"]')[1]

let selectElement = document.querySelector("select")


// inputElement.addEventListener("keypress",addevent)

// inputElement.addEventListener("blur",addevent)

// inputElement.addEventListener("cut",addevent)


// inputElement.addEventListener("copy",addevent)


// inputElement.addEventListener("paste",addevent)

selectElement.addEventListener("change",addevent)


// btn.addEventListener("mouseenter", addevent)



function addevent(e){

    // console.log(e.target)

    // console.log(e.target.className)
    // console.log(e.target.id)
    // console.log(e.target.classList);

//   console.log(e.type)

//   console.log(e);

//   console.log(e.clientX)
//   console.log(e.clientY);
//   console.log(e.offsetY);
//   console.log(e.offsetX)

// console.log(e.ctrlKey)
// console.log(e.altKey)
// console.log(e.shiftKey)

// console.log(e)

//  let divElement = document.getElementsByClassName("container")[1]

//  console.log(divElement)

console.log( "Event Types : " + "" + e.type)

// divElement.innerHTML = `<h3> + ${e.target.value}+"</h3>"`



// console.log("x offset value" + e.offsetX + "y- offset value" + e.offsetY)


// document.body.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 100)"



}