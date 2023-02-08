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
const getStartedDiv = document.querySelector(".container2");

const filterIcon = document.createElement("div");
filterIcon.classList.add("filterIcon")
const filterText = document.createElement("div")
filterText.classList.add("filterText")
filterText.textContent = "Filter";
const filter = document.createElement("button");
filter.type = "button";
// filter.textContent = "Filter";
const search = document.createElement("input");
search.classList.add("search");
search.placeholder = "Browse between APIs...";
const searchForm = document.createElement("form");
searchForm.classList.add("searchForm");
const containerForContent = document.createElement("div");
containerForContent.classList.add("containerForContent");
const content = document.createElement("div");
content.classList.add("contentBox");
const containerForFilterContainer = document.createElement("div");
containerForFilterContainer.classList.add("containerForFilterContainer");
const filterContent = document.createElement("div");
filterContent.classList.add("filterContainer");
const filterLine = document.createElement("div");
filterLine.classList.add("filterLine");
filterLine.classList.add("hidden");
const yearFilterContainer = document.createElement("div");
yearFilterContainer.classList.add("yearFilterContainer")

const year_start_container = document.createElement("div");
year_start_container.classList.add("year_start_container");
const year_end_container = document.createElement("div");
year_end_container.classList.add("year_end_container");
const fromText = document.createElement("p");
fromText.classList.add("fromText");
fromText.classList.add("hidden")
fromText.textContent = "From";
const toText = document.createElement("p");
toText.classList.add("toText");
toText.classList.add("hidden")
toText.textContent = "To";
const year_start = document.createElement("input");
year_start.classList.add("year_start");
year_start.classList.add("hidden");
year_start.type = "number";
year_start.value = 1;
const year_end = document.createElement("input");
year_end.classList.add("year_end");
year_end.classList.add("hidden");
year_end.type = "number";
year_end.value = 2023;


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
    getStartedDiv.classList.remove("container2");
    




    const container = document.createElement("div");
    container.classList.add("input");
    const h1 = document.createElement("h1");
    h1.textContent = "Nasa Api";
    h1.classList.add("logo");
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("nasaTitleContainer");
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("inputContainer");

    
    
    filter.classList.add("filter");
    filter.classList.add("gradient-border");
    
    
    

   
    
    
    
    document.body.appendChild(container);
    container.appendChild(titleContainer);
    titleContainer.appendChild(h1);
    container.appendChild(inputContainer);
    inputContainer.appendChild(searchForm);
    searchForm.innerHTML += `<ion-icon name="search" class="searchIcon"></ion-icon>`;
    searchForm.appendChild(search);
    container.appendChild(containerForFilterContainer);
    filterContent.appendChild(filterIcon);
    filterContent.appendChild(filterText);
    filterIcon.innerHTML += `<ion-icon name="options" class="optionsIcon"></ion-icon>`
    containerForFilterContainer.appendChild(filterContent);
    filterContent.appendChild(filter);
    document.body.appendChild(containerForContent);
    containerForContent.appendChild(content);
    filterContent.appendChild(filterLine);
    filterContent.appendChild(yearFilterContainer);
    yearFilterContainer.appendChild(year_start_container);
    yearFilterContainer.appendChild(year_end_container);
    year_start_container.appendChild(fromText);
    year_end_container.appendChild(toText)    
    year_start_container.appendChild(year_start);
    year_end_container.appendChild(year_end);
});


filter.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("filter");

    filter.classList.toggle("filterOpen");
    filterContent.classList.toggle("filterContent");
    fromText.classList.toggle("hidden");
    toText.classList.toggle("hidden");
    year_start.classList.toggle("hidden");
    year_end.classList.toggle("hidden");
    filterContent.classList.toggle("gradient-border");
    filter.classList.toggle("no-before");
    filterLine.classList.toggle("hidden");
    
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("hej");

    async function ImageAndVideoLibrary() {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${search.value}&year_start=${year_start.value}&year_end=${year_end
    .value}`)
        const info = await response.json()
        console.log(info)
        for (let i = 0; i < info.collection.items.length; i++) {

            // let itemNumber = info.collection.items.map(NumberMaker)
            
            // console.log(info.collection.items[i].data[0].media_type)
            //denna ifsats är till för att den ska ändra innerHTML om det är en bild eller en video
            if (i % 2 == 0) {
                console.log("even")
                content.innerHTML += 
                `<div class="contentContainer"><div class="contentCard1">
                <img src="${info.collection.items[i].links[0].href}" width="200px">
                <div class="cardText"><p class="date mulish">${info.collection.items[i].data[0].date_created}</p>
                <p class="title Lalezar">${info.collection.items[i].data[0].title}</p>
                <p class="description openSans">${info.collection.items[i].data[0].description}</p>
                <div class="photographerContainer"><p class="photographer Lalezar">By ${info.collection.items[i].data[0].photographer}</p></div></div></div></div>`    
            } else {
                console.log("odd")
                content.innerHTML += 
                `<div class="contentContainer"><div class="contentCard2">
                <img src="${info.collection.items[i].links[0].href}" width="200px">
                <div class="cardText"><p class="date mulish">${info.collection.items[i].data[0].date_created}</p>
                <p class="title Lalezar">${info.collection.items[i].data[0].title}</p>
                <p class="description openSans">${info.collection.items[i].data[0].description}</p>
                <div class="photographerContainer"><p class="photographer Lalezar">By ${info.collection.items[i].data[0].photographer}</p></div></div></div></div>` 
            }
            // console.log(itemNumber)
            
            
        }
        
    };
    ImageAndVideoLibrary()
    content.innerHTML = "";
});


// function NumberMaker(str) {
//     return parseInt(str)
// }



    // let filteredArray = info.collection.items.filter(item => item.data[0].media_type === "image")


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














