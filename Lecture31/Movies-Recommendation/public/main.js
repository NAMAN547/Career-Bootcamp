
const searchInput = document.getElementById("searchinput");
const result = document.getElementById("section");

// console.log(searchinput)

async function getMovies(searchText){

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    const movies = await res.json();
    // console.log(movies)

    //  await Movie.create({ 

    //     name : movie.show.name,
    //     image: movie.show.image.medium,
    //     year: movie.show.premiered,
    //     runtime: movie.show.runtime
    // })

    for(let movie of movies){

    //     const pattern = new RegExp(`^${searchText}(?!.*\\b${searchText}\\b)`, "i");
    
    // let movieName = movie.show.name;
    // const foundMovie = movieName.match(pattern);

    // console.log(foundMovie)
   
        if(movie.show.image != null && pattern){

            const div = document.createElement("div");

             div.innerHTML = `<h1> ${movie.show.name}</h1>
             <p> year : ${movie.show.premiered}</p>
             <p> runtime : ${movie.show.runtime}</p>
            `

            const image = document.createElement("img");
            image.setAttribute("src", movie.show.image.medium);


            div.append(image);
            result.append(div);
        }
     }
}

searchinput.addEventListener("keypress",(e)=>{

    const searchText = searchInput.value;

    if(e.key === "Enter"){

        getMovies(searchText)
    }
})