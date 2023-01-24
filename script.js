// document.getElementById("content");

async function GetNasaInfo() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=UQ0nHj3wQkHLj52bjcjrk1QF8WtKmUmUqCSIMQSA")
    const info = await response.json()
    console.log(info)
    // document.getElementById("content").textContent = info.date
    document.getElementById("content").innerHTML = `${info.date} <img>${info.hdurl}</img>`
}

GetNasaInfo()







