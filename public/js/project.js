const timer = document.getElementById('timer');
const modalContainer = document.getElementById('modal-container');
const continueBtn = document.getElementById('continue');
const secondTotal = document.getElementById('second-total');
const minuteTotal = document.getElementById('minute-total');
const hourTotal = document.getElementById('hour-total');
const earnedWage = document.getElementById('earned-wage');

let wageValue = parseFloat(earnedWage.innerHTML);

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var totalSeconds = 0;
var totalMinutes = 0;
var totalHours = 0;
var rate = 0;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        setWage();
        timerCycle();
    }
}

function setWage() {
  const rate = document.querySelector('#rate-input').value.trim();
  value = ((rate * totalSeconds) / 3600) + ((rate * totalMinutes) / 60) + (rate * totalHours) + wageValue;
  earnedWage.innerHTML = value.toFixed(2)
  return value;
}


async function timerCycle() {
    if (stoptime == false) {

    const breakTime = document.querySelector('#break-input').value.trim();

    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    // sec = sec + 1;

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
    
    if ((breakTime - 1) == sec) {
      totalSeconds += (sec + 1);
      totalMinutes += min;
      totalHours += hr;
      if (totalSeconds >= 60) {
        totalMinutes = totalMinutes + 1;
        totalSeconds = 0;
      }
      if (totalMinutes >= 60) {
        hourTotal.innerHTML = totalHr + 1;
        minuteTotal.innerHTML = 0;
        secondTotal.innerHTML = 0;
      }
      secondTotal.innerHTML = totalSeconds;
      minuteTotal.innerHTML = totalMinutes;
      hourTotal.innerHTML = totalHours;
      stopTimer();
      modalContainer.classList.add('show');
    }

    setTimeout("timerCycle()", 1000);
  }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function resetTimer() {
    sec = 0;
    min = 0;
    hr = 0;
    timer.innerHTML = '00:00:00';
}

continueBtn.addEventListener('click', () => {
  setWage();
  resetTimer();
  modalContainer.classList.remove('show');
});