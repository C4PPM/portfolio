const startButton = document.getElementById("startButton")
const loader = document.getElementById("loader")

window.onload = function(){
startButton.style.opacity = "1"
}

startButton.onclick = function(){
loader.style.display = "none"
}


/* MUSIC PLAYER */

const music = document.getElementById("bgMusic")
const playBtn = document.getElementById("playMusic")

playBtn.onclick = function(){

if(music.paused){
music.play()
playBtn.innerText="Pause Music"
}else{
music.pause()
playBtn.innerText="Play Music"
}

}


/* ADMIN KEY */

const ADMIN_KEY = "12345"

document.getElementById("adminKey").onclick = function(){

let input = prompt("Enter admin key")

if(input === ADMIN_KEY){

let newStatus = prompt("Set status: available / busy / closed")

localStorage.setItem("status",newStatus)

document.getElementById("statusText").innerText = newStatus

}

}


/* LOAD STATUS */

let savedStatus = localStorage.getItem("status")

if(savedStatus){
document.getElementById("statusText").innerText = savedStatus
}


/* SCROLL FADE */

const fades = document.querySelectorAll(".fade")

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
})

fades.forEach(section=>{
observer.observe(section)
})
