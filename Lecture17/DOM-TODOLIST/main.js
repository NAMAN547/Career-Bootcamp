


let themeColors = document.querySelectorAll('input[type="radio"]');

// console.log(themeColors);

//store themes

function storeTheme(theme){

    localStorage.setItem("theme", theme);

}




//apply theme 

function applyTheme(){

   const activeTheme =  localStorage.getItem("theme");

   themeColors.forEach((themeOption)=>{

    if(activeTheme === themeOption.id){

        themeOption.checked = true
    }
   })
}


themeColors.forEach((themeOption)=>{

    themeOption.addEventListener("click",()=>{

        // console.log(themeOption)

        storeTheme(themeOption.id)

    })

})


document.onload = applyTheme()





























let  form = document.getElementById("addForm")

let listItem = document.getElementById("items")

let filterItem = document.getElementById("filter")


  form.addEventListener("submit",
  runEvent)


  listItem.addEventListener("click",removeEvent)

  filterItem.addEventListener("keyup", filterEvent)


  function runEvent(e){

    e.preventDefault();

    
let inputElement = document.querySelector('input[id="item"]');



let newItem = document.createElement("li");

newItem.className="list-group-item";

newItem.append(inputElement.value)

console.log(newItem);



let deleteBtn = document.createElement("button");

deleteBtn.className= "btn btn-danger btn-sm float-right delete"

deleteBtn.append("X")


newItem.append(deleteBtn);

listItem.append(newItem)

  }


  // remove items form list


  function removeEvent(e){


 if(e.target.classList.contains("btn-danger")){
    

    if(confirm(" want to delete this item?")){


       listItem.removeChild(e.target.parentElement)

    }
 }
  }


  // filter out elements

function filterEvent(e){

   
    let text = e.target.value.toLowerCase();

    let items = document.getElementsByTagName("li")

    // console.log(items);


    Array.from(items).forEach((item)=>{

         let searchText = item.childNodes[0].textContent;

         if(searchText.toLowerCase().indexOf(text) != -1){


item.style.display = "block"

         }
         else{
            item.style.display = "none"
         }
    })
}








