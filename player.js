const audio = document.getElementById("audioPlayer")

const playBtn = document.getElementById("playBtn")
const playIcon = document.getElementById("playIcon")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const shuffleBtn = document.getElementById("shuffleBtn")

const progressBar = document.querySelector(".bg-primary")

let currentSong = 0
let shuffle = false
let repeat = false

let songs = [

{
title: "Starlight",
artist: "Echo",
src: "songs/song1.mp3",
cover: "covers/1.jpg"
},

{
title: "Night Drive",
artist: "Neon Sky",
src: "songs/song2.mp3",
cover: "covers/2.jpg"
},

{
title: "Ocean Lights",
artist: "Aurora",
src: "songs/song3.mp3",
cover: "covers/3.jpg"
}

]

function loadSong(index){

audio.src = songs[index].src

document.querySelector("h1").textContent = songs[index].title

document.querySelector("p").textContent = songs[index].artist

}

loadSong(currentSong)

playBtn.onclick = () => {

if(audio.paused){

audio.play()

playIcon.textContent = "pause"

}else{

audio.pause()

playIcon.textContent = "play_arrow"

}

}

nextBtn.onclick = () => {

if(shuffle){

currentSong = Math.floor(Math.random()*songs.length)

}else{

currentSong++

if(currentSong >= songs.length){

currentSong = 0

}

}

loadSong(currentSong)

audio.play()

playIcon.textContent = "pause"

}

prevBtn.onclick = () => {

currentSong--

if(currentSong < 0){

currentSong = songs.length - 1

}

loadSong(currentSong)

audio.play()

}

shuffleBtn.onclick = () => {

shuffle = !shuffle

shuffleBtn.style.color = shuffle ? "#1db954" : ""

}

audio.addEventListener("ended", () => {

if(repeat){

audio.play()

}else{

nextBtn.click()

}

})

audio.addEventListener("timeupdate", () => {

if(audio.duration){

let progress = (audio.currentTime / audio.duration) * 100

progressBar.style.width = progress + "%"

}

})

document.querySelector(".h-1").onclick = (e) => {

let bar = e.currentTarget

let percent = e.offsetX / bar.clientWidth

audio.currentTime = percent * audio.duration

}

const upload = document.getElementById("uploadMusic")

upload.addEventListener("change",(e)=>{

const files = e.target.files

for(let file of files){

songs.push({

title:file.name,

artist:"Local file",

src:URL.createObjectURL(file)

})

}

})
