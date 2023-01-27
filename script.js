const APIKey = "UQ0nHj3wQkHLj52bjcjrk1QF8WtKmUmUqCSIMQSA"

// document.getElementById("content");

// https://api.nasa.gov/planetary/apod?api_key=UQ0nHj3wQkHLj52bjcjrk1QF8WtKmUmUqCSIMQSA

// let url = "https://images-api.nasa.gov/search?q=space"

// const search = document.querySelector("#search")
// const button = document.querySelector("button")

// button.addEventListener("click", () => {

//     const search = document.querySelector("#search")

//     url = `https://images-api.nasa.gov/search?q=`


//     fetch(url).then(response => response.json()).then((data) => {
//         console.log("data", data);
//     });
// });




async function APOD() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
    const info = await response.json()
    console.log(info)
    // document.getElementById("content").textContent = info.date
    document.getElementById("content").innerHTML = `<img src="${info.url}" width="200px"><p>${info.title}</p>${info.date}<p>${info.explanation}</p>`
}

APOD()

async function Asteroids() {
    const response = await fetch (`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${APIKey}`)
    const info = await response.json()
    console.log(info)
}




