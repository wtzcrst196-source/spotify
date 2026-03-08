const uploadMusic = document.getElementById("uploadMusic")

const library = document.getElementById("library")

const searchInput = document.getElementById("searchInput")

function renderLibrary(){

library.innerHTML=""

songs.forEach((song,i)=>{

let div=document.createElement("div")

div.textContent=song.title

div.onclick=()=>{

currentSong=i

loadSong(i)

audio.play()

}

library.appendChild(div)

})

}

uploadMusic.addEventListener("change",(e)=>{

const files=e.target.files

for(let file of files){

songs.push({

title:file.name,

src:URL.createObjectURL(file)

})

}

renderLibrary()

savePlaylist()

})

searchInput.addEventListener("input",()=>{

let query=searchInput.value.toLowerCase()

let results=songs.filter(song=>song.title.toLowerCase().includes(query))

const container=document.getElementById("searchResults")

container.innerHTML=""

results.forEach(song=>{

let div=document.createElement("div")

div.textContent=song.title

container.appendChild(div)

})

})

function savePlaylist(){

localStorage.setItem("playlist",JSON.stringify(songs))

}

function loadPlaylist(){

let data=localStorage.getItem("playlist")

if(data){

songs=JSON.parse(data)

renderLibrary()

}

}

loadPlaylist()
