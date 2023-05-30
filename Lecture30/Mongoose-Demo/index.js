const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/careerbootcampDB")
.then(()=> console.log(" CONNECTION OPEN"))
.catch((err)=> console.log(err));



const movieSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name bhi daalo!"]
    },
    ratings: {
        type: Number, 
        min : 1,
        max : [10, "not more than 10!"]
    }, 
    year: {
        type: Number, 
        default: 0
    },
    isWatched: Boolean

})

   const Movie = mongoose.model("Movie",movieSchema);

 async function print(){

      const movieName = await Movie.insertMany([{ name: "Spiderman", ratings:8, isWatched: false}, {name: "Avengers-3", ratings:5, year: 2018, isWatched: false}]);

      console.log(movieName);
 }


print()






// const Avengers = new Movie({name: "Avengers",year: 2015, ratings: 8, isWatched: false});

// Avengers.save()
// .then(()=> console.log("movie saved successfully"))
// .catch(()=> console.log("movie save nhi hui hai"))

// console.log(Avengers)