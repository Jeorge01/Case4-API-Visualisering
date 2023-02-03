let APIKey = "";

const NasaIVL = "./NASAImageAndVideoLibrary.json";
const MarsRP = "./MarsRoverPhotos.json";

const startButton = document.querySelector("get_started")
const inputdiv = document.querySelector("#input")

const keyInput = document.createElement("input")
keyInput.type = "text";
keyInput.placeholder = "Enter your API key..."

const keySubmit = document.createElement("button")
keySubmit.type = "submit"

startButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    inputdiv.appendChild(keyInput)
    inputdiv.appendChild(keySubmit)


    console.log("hej")
    
});

keySubmit.addEventListener("click", (e) => {
    e.preventDefault();
    APIKey = keyInput.value;

    console.log(APIKey)
    ImageAndVideoLibrary()
})



// `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${APIKey}`
// `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=10`

async function ImageAndVideoLibrary() {
    const response = await fetch("./NASAImageAndVideoLibrary.json")
    const info = await response.json()
    console.log(info)
    document.getElementById("content").innerHTML = `<img src="${info[0].hdurl}" width="200px"><p>${info[0].title}</p>${info[0].date}<p>${info[0].explanation}</p><p>${info[0].copyright}</p>`
};



// console.log(API)












