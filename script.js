let APIKey = "";

const searchMars = "./SearchMars"
const NasaIVL = "./NASAImageAndVideoLibrary.json";
const MarsRP = "./MarsRoverPhotos.json";

const backgroundOverlay = document.querySelector(".backgroundoverlay");
const footerName = document.querySelector(".footerName");
const footerBox = document.querySelector(".myFooter");
const github = document.querySelector(".github");
const mail = document.querySelector(".mail");
const mailEl = document.querySelector(".mailEl");
const githubEl = document.querySelector(".githubEl");
const PoweredByNASAApi = document.querySelector(".PBNA");
const buttonForm = document.querySelector(".buttonForm");
const startBtn = document.querySelector(".get_started");
const getStartedDiv = document.querySelector(".container2")

const filter = document.createElement("button");
filter.type = "button"
const search = document.createElement("input");
search.classList.add("search")
const searchForm = document.createElement("form");

buttonForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    startBtn.classList.add("hidden");
    PoweredByNASAApi.classList.add("hidden");
    mailEl.classList.add("hidden");
    mail.classList.add("hidden");
    githubEl.classList.add("hidden");
    github.classList.add("hidden");
    footerName.classList.add("hidden");
    footerBox.classList.remove("myFooter");
    getStartedDiv.classList.remove("container2")




    const container = document.createElement("div")
    container.classList.add("container4")
    const h1 = document.createElement("h1")
    h1.textContent = "Nasa Api";
    h1.classList.add("logo")
    const titleContainer = document.createElement("div")
    
    search.classList.add("container5")
    

   
    
    
    filter.classList.add("filter")
    backgroundOverlay.appendChild(container)
    container.appendChild(titleContainer)
    titleContainer.appendChild(h1);
    container.appendChild(searchForm);
    searchForm.appendChild(search);
    searchForm.appendChild(filter);
    
    
});


filter.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("filter")
    
})

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()

    async function ImageAndVideoLibrary() {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
        const info = await response.json()
        console.log(info)
        document.body.innerHTML = `<img src="${info.collection.items[0].links[0].href}" width="200px"><p>${info.collection.items[0].data[0].title}</p>${info.collection.items[0].data[0].date_created}<p>${info.collection.items[0].data[0].description}</p><p>${info.collection.items[0].data[0].photographer}</p>`
    };
    ImageAndVideoLibrary()
})


// keySubmit.addEventListener("click", (e) => {
//     e.preventDefault();
//     APIKey = keyInput.value;

//     console.log(APIKey)
//     ImageAndVideoLibrary()
// })


//`https://images-api.nasa.gov/search?q=${search.value}`


// `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${APIKey}`
// `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=10`
// `https://images-api.nasa.gov/search?q=${search.value}`
// `https://images-api.nasa.gov/asset/{nasa_id}`
// `https://images-api.nasa.gov/metadata/{nasa_id}`
// `https://images-api.nasa.gov/captions/{nasa_id}`














