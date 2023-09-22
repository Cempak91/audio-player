const background = document.getElementById("background")
const songImage = document.getElementById ("songImage")
const play = document.getElementById ("play_pause")
const prev = document.getElementById ("prev")
const next = document.getElementById ("next")
const songArtist = document.querySelector (".song_artist")
const songTitle = document.querySelector (".song_title")
const progress = document.querySelector (".progress")
const currentTime = document.querySelector (".currentTime")
const durationTime = document.querySelector (".durationTime")
const audio = document.getElementById ("song")
const content = document.querySelector (".content")
const songs = ["Linkin Park - In The End", "Rock Privet - Faint _ Omen"]

let songIndex = 0

function loadSong(song) {
    if (songIndex ===0) {
        songArtist.innerHTML = "Linkin Park"
        songTitle.innerHTML = "In The End"
    } else {
        songArtist.innerHTML = "Rock Privet"
        songTitle.innerHTML = "Faint _ Omen" 
        console.log (songIndex)  
    }
    audio.src = `audio/${song}.mp3`
    background.src = `img/${song}.jpg`
    songImage.src = `img/${song}.jpg`
}

loadSong(songs[songIndex]);

function playSong () {
    play.src = `svg/pause.png`
    content.classList.add ("played")
    audio.play()
}

function pauseSong () {
    play.src = `svg/play.png`
    content.classList.remove ("played")
    audio.pause()
}

play.addEventListener("click", () => {
    const isPlaying = content.classList.contains("played")
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

function nextSong () {
    songIndex++
    if (songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong()
}

function prevSong () {
    songIndex--
    if (songIndex <0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong()
}

next.addEventListener("click", nextSong)
prev.addEventListener("click", nextSong)