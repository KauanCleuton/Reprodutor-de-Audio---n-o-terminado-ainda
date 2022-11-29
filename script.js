const tocar = document.querySelector('.tocar')
const music = new Audio('copo-roxo.mp3')
const button1 = document.querySelector("#tocar")
const button2 = document.querySelector("#tocar2")




function Tocar() {
  music.play()
  Pause()
  document.querySelector('h1').innerHTML = "Música: Copo Roxo"
  musica
}
function Pause() {
  button1.classList.toggle('hide')
  button2.classList.toggle('hide')
}
function Paused () {
  music.pause()
  Pause()
}