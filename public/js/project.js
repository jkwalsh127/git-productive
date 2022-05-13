const timer = document.getElementById('timer');
const modalContainer = document.getElementById('modal-container');
const continueBtn = document.getElementById('continue');
const secondTotal = document.getElementById('second-total');
const minuteTotal = document.getElementById('minute-total');
const hourTotal = document.getElementById('hour-total');
const earnedWage = document.getElementById('earned-wage');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var totalSeconds = secondTotal.innerHTML;
var totalMinutes = minuteTotal.innerHTML;
var totalHours = hourTotal.innerHTML;
var rate = 0;

function setWage() {
  const rate = document.querySelector('#rate-input').value.trim();
  value = ((rate * totalSeconds) / 3600) + ((rate * totalMinutes) / 60) + (rate * totalHours);
  earnedWage.innerHTML = value.toFixed(2);
  return value;
}

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
    
    const breakTime = document.querySelector('#break-input').value.trim();
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    totalSeconds = parseInt(totalSeconds);
    totalMinutes = parseInt(totalMinutes);
    totalHours = parseInt(totalHours);

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

    timer.innerHTML = hr + ':' + min + ':' + sec;
    console.log(sec);
    if ((breakTime) == min) {
      totalSeconds += (sec + 1);
      totalMinutes += min;
      totalHours += hr;
      console.log(totalSeconds);
      if (totalSeconds >= 61) {
        totalMinutes = totalMinutes + 1;
        totalSeconds = 0;
      }
      if (totalMinutes >= 61) {
        totalHours = totalHours + 1;
        totalMinutes = 0;
        totalSeconds = 0;
      }
      secondTotal.innerHTML = totalSeconds;
      minuteTotal.innerHTML = totalMinutes;
      hourTotal.innerHTML = totalHours;
      setWage();
      stopTimer();
      modalContainer.classList.add('show');
    }

    setTimeout("timerCycle()", 1000);
  }
}
  
function resetTimer() {
    sec = 0;
    min = 0;
    hr = 0;
    timer.innerHTML = '00:00:00';
}

continueBtn.addEventListener('click', () => {
  resetTimer();
  modalContainer.classList.remove('show');
});