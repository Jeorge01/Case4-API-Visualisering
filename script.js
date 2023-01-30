const APIKey = ""

const apiurl = "./NASAImageAndVideoLibrary.json";

// `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=10`

async function ImageAndVideoLibrary() {
    const response = await fetch(apiurl)
    const info = await response.json()
    console.log(info)
    document.getElementById("content").innerHTML = `<img src="${info[0].hdurl}" width="200px"><p>${info[0].title}</p>${info[0].date}<p>${info[0].explanation}</p><p>${info[0].copyright}</p>`
}

ImageAndVideoLibrary()

// console.log(API)












