
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const timer = document.querySelector('.timer');
const tela = document.querySelector('.game-board')

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  } ,500)
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPositon = +window.getComputedStyle(mario).bottom.replace('px','');
  if(pipePosition <= 120 && pipePosition > 0 && marioPositon < 80) {

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPositon}px`

    mario.src = 'game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    window.location='loser.html'

    clearInterval(loop)
  }

} ,10)
document.addEventListener('', startTimer())
document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
