
const timer = document.getElementById('timer');
const modalContainer = document.getElementById('modal-container');
const continueBtn = document.getElementById('continue');
const secondTotal = document.getElementById('second-total');
const minuteTotal = document.getElementById('minute-total');
const hourTotal = document.getElementById('hour-total');

  var hr = 0;
  var min = 0;
  var sec = 0;
  var stoptime = true;
  var totalSec = [];
  var totalMin = [];
  var totalHr = [];
  
  function startTimer() {
    if (stoptime == true) {
          stoptime = false;
          timerCycle();
      }
  }
  function stopTimer() {
    if (stoptime == false) {
      stoptime = true;
    }
  }
  
  async function timerCycle() {
      if (stoptime == false) {
      sec = parseInt(sec);
      min = parseInt(min);
      hr = parseInt(hr);

      const breakTime = document.querySelector('#break-input').value.trim();

      sec = sec + 1;
  
      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
      }
  
      if (sec < 10 || sec == 0) {
        sec = '0' + sec;
      }
      if (min < 10 || min == 0) {
        min = '0' + min;
      }
      if (hr < 10 || hr == 0) {
        hr = '0' + hr;
      }
  
      timer.innerHTML = hr + ':' + min + ':' + sec;

      console.log(sec);
      console.log(min);
      console.log(hr);
      if (breakTime == sec) {
        await totalSec.push(sec);
        await totalMin.push(min);
        await totalHr.push(hr);
        await addSeconds();
        await addMinutes();
        await addHours();
        stopTimer();
        modalContainer.classList.add('show');
      }
  
      setTimeout("timerCycle()", 1000);
    }
  }

function addSeconds() {
  var totalSeconds = 0;
  for (let i = 0; i < totalSec.length; i++) {
    totalSeconds += totalSec[i];
  }
  if (totalSeconds == 0) {
    return;
  }
  return secondTotal.innerHTML = totalSeconds;
}
function addMinutes() {
  var totalMinutes = 0;
  for (let i = 0; i < totalMin.length; i++) {
    totalMinutes += totalMin[i];
  }
  if (totalMinutes == 0) {
    return;
  }
  return minuteTotal.innerHTML = totalMinutes;
}
function addHours() {
  var totalHours = 0;
  for (let i = 0; i < totalHr.length; i++) {
    totalHours += totalHr[i];
  }
  if (totalHours == 0) {
    return;
  }
  return hourTotal.innerHTML = totalHours;
}
  
  function resetTimer() {
      timer.innerHTML = '00:00:00';
  }

continueBtn.addEventListener('click', () => {
  startTimer();
  modalContainer.classList.remove('show');
});