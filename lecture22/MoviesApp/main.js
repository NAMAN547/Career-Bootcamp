const URL = "https://api.tvmaze.com/search/shows?q=";

const form = document.getElementById("form");

const result = document.getElementById("container");



function removemovies(parent){

    while(parent.firstChild){

        console.log(parent.firstChild)
       
        parent.firstChild.remove()

    }
}


function getMovies(searchtext){

    axios.get(`${URL}${searchtext}`)
    .then((res)=>{

        const movies = res.data

        // console.log(res.data)

        for( let movie of movies){

           if(movie.show.image != null){

            const image = document.createElement("img");

            image.setAttribute("src", movie.show.image.medium);

            result.append(image)

           }



        }



    })
}





form.addEventListener("submit", (e)=>{

    e.preventDefault();

  const searchtext = form.children[1].value;

  console.log(searchtext);

  removemovies(result)

  getMovies(searchtext);

  form.children[1].value = " "

})