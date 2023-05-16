// const URL = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=83351f7acfea7975443ce1ddaa7a9028";

//  const response = await fetch(URL, {

//     method: "GET",
// })

// const result = await response.json();

// console.log(result);

const axios = require('axios');

axios.get("https://api.openweathermap.org/data/2.5/weather?q=london&appid=83351f7acfea7975443ce1ddaa7a9028")
.then((res)=>{

   console.log(res.data);

   let json = JSON.stringify(res.data)
   console.log(json)


})
.catch((err)=>{

    console.log(err)
})




