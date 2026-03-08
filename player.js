const audio = document.getElementById("audioPlayer")

const playBtn = document.getElementById("playBtn")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

const songTitle = document.getElementById("songTitle")

let currentSong = 0

let songs = [

]

function loadSong(index){

audio.src = songs[index].src

songTitle.textContent = songs[index].title

}

playBtn.onclick = () => {

if(audio.paused){

audio.play()

playBtn.textContent="Pause"

}else{

audio.pause()

playBtn.textContent="Play"

}

}

nextBtn.onclick = () => {

currentSong++

if(currentSong >= songs.length){

currentSong = 0

}

loadSong(currentSong)

audio.play()

}

prevBtn.onclick = () => {

currentSong--

if(currentSong < 0){

currentSong = songs.length - 1

}

loadSong(currentSong)

audio.play()

}
