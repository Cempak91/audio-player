const background = document.getElementById("background")
const songImage = document.getElementById ("songImage")
const play = document.getElementById ("play_pause")
const prev = document.getElementById ("prev")
const next = document.getElementById ("next")
const songArtist = document.querySelector (".song_artist")
const songTitle = document.querySelector (".song_title")
const progress = document.getElementById ("progress")
const currentTimeNum = document.querySelector (".currentTime")
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
    }
    audio.src = `audio/${song}.mp3`
    background.src = `img/${song}.jpg`
    songImage.src = `img/${song}.jpg`
}


loadSong(songs[songIndex]);

audio.onloadeddata =() => {
    let minute = Math.floor(audio.duration /60);
    let second = Math.floor(audio.duration % 60);
    durationTime.innerHTML = [  minute.toString().padStart(2, '0'),
    second.toString().padStart(2, '0')
].join(":")
}

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

function changeProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.value = progressPercent
    let minute = Math.floor(currentTime /60)
    let second = Math.floor(currentTime % 60)
    currentTimeNum.innerHTML = [  minute.toString().padStart(2, '0'),
    second.toString().padStart(2, '0')
].join(":")
}

audio.addEventListener("timeupdate", changeProgress)

function setProgress (e) {
    const width = this.clientWidth
    const userClick = (progress.value / 100) * audio.duration
    audio.currentTime = userClick
}

progress.addEventListener("input", setProgress)