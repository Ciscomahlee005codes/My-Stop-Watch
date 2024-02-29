alert("Welcome to Mahlee stopwatch");
alert("Start ticking !!!");
const timeFactor = document.querySelector('.stopwatch #displayTime');
const pauseButton = document.getElementById('pause');
const playButton = document.getElementById('play');
const restartstartButton = document.getElementById('restart');

let secondsCounter = 0;
let interval = null;

playButton.addEventListener('click',play);
pauseButton.addEventListener('click',pause);
restartstartButton.addEventListener('click',restart);
 
function timer() {
   secondsCounter++;
   
   let hrs = Math.floor(secondsCounter / 3600);
   let mins = Math.floor((secondsCounter - (hrs * 3600)) / 60);
   let secund = secondsCounter % 60
   if (secund < 10) {
    secund = '0' + secund;
   }
   if (mins < 10) {
    mins = '0' + mins;
   }
   if (hrs < 10) {
    hrs = '0' + hrs;
   }

   timeFactor.innerHTML = `${hrs}: ${mins}: ${secund}`;
}
function play() {
   if (interval) {
      return
   }
   interval = setInterval(timer, 100)
}
function pause() {
   clearInterval(interval);
   interval = null;
}
function restart() {
   stop();
   secondsCounter = 0;
   timeFactor.innerHTML = '00:00:00';
}