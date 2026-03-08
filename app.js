function showPage(page){

document.getElementById("homePage").classList.add("hidden")
document.getElementById("searchPage").classList.add("hidden")
document.getElementById("libraryPage").classList.add("hidden")

if(page==="home"){
document.getElementById("homePage").classList.remove("hidden")
}

if(page==="search"){
document.getElementById("searchPage").classList.remove("hidden")
}

if(page==="library"){
document.getElementById("libraryPage").classList.remove("hidden")
}

}
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("input",()=>{

let query = searchInput.value.toLowerCase()

let results = songs.filter(song =>
song.title.toLowerCase().includes(query)
)

renderResults(results)

})

function renderResults(results){

const container = document.getElementById("searchResults")

container.innerHTML=""

results.forEach(song=>{

let div=document.createElement("div")

div.textContent=song.title

container.appendChild(div)

})

}
function savePlaylist(){

localStorage.setItem("playlist", JSON.stringify(songs))

}

function loadPlaylist(){

let data = localStorage.getItem("playlist")

if(data){

songs = JSON.parse(data)

}

}const uploadMusic = document.getElementById("uploadMusic")

uploadMusic.addEventListener("change",(e)=>{

const files = e.target.files

for(let file of files){

songs.push({
title:file.name,
src:URL.createObjectURL(file)
})

}

savePlaylist()

})
