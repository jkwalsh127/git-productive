
const timer = document.getElementById('timer');
const modalContainer = document.getElementById('modal-container');
const continueBtn = document.getElementById('continue');
const secondTotal = document.getElementById('second-total');
const minuteTotal = document.getElementById('minute-total');
const hourTotal = document.getElementById('hour-total');
const earnedWage = document.getElementById('earned-wage');
const saveTimeBtn = document.getElementById('save-time');

const rate = 100;

  var hr = 0;
  var min = 0;
  var sec = 0;
  var stoptime = true;

  var totalSeconds = 0;
  var totalMinutes = 0;
  var totalHours = 0;
  
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
      var totalSec = [];
      var totalMin = [];
      var totalHr = [];


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
  
      // if (sec < 10 || sec == 0) {
      //   sec = '0' + sec;
      // }
      // if (min < 10 || min == 0) {
      //   min = '0' + min;
      // }
      // if (hr < 10 || hr == 0) {
      //   hr = '0' + hr;
      // }
  
      timer.innerHTML = hr + ':' + min + ':' + sec;

      console.log(sec);
      if (breakTime == sec) {
        await totalSec.push(sec);
        await totalMin.push(min);
        await totalHr.push(hr);
        await addSeconds(totalSec);
        await addMinutes(totalMin);
        await addHours(totalHr);
        await workValue(rate);
        console.log(totalSec);
        stopTimer();
        modalContainer.classList.add('show');
      }
  
      setTimeout("timerCycle()", 1000);
    }
  }

function addSeconds(totalSec) {
  for (let i = 0; i < totalSec.length; i++) {
    totalSeconds += totalSec[i];
  }
  if (totalSeconds == 0) {
    return;
  }
  if (totalSec == 60) {
    totalMin = totalMin + 1;
    totalSec = 0;
  }
  secondTotal.innerHTML = totalSeconds
  return totalSeconds;
}

function addMinutes(totalMin) {
  var totalMinutes = 0;
  for (let i = 0; i < totalMin.length; i++) {
    totalMinutes += totalMin[i];
  }
  if (totalMinutes == 0) {
    return;
  }
  if (totalMin == 60) {
    totalHr = totalHr + 1;
    totalMin = 0;
    totalSec = 0;
  }
  minuteTotal.innerHTML = totalMinutes
  return totalMinutes;
}

function addHours(totalHr) {
  var totalHours = 0;
  for (let i = 0; i < totalHr.length; i++) {
    totalHours += totalHr[i];
  }
  if (totalHours == 0) {
    return;
  }
  hourTotal.innerHTML = totalHours
  return totalHours;
}
  
function resetTimer() {
    sec = 0;
    min = 0;
    hr = 0;
    var totalSec = [];
    var totalMin = [];
    var totalHr = [];
    timer.innerHTML = '00:00:00';
    return totalSec, totalMin, totalHr;
}

continueBtn.addEventListener('click', () => {
  resetTimer();
  modalContainer.classList.remove('show');
});
continueBtn.addEventListener('click', () => {
  resetTimer();
  modalContainer.classList.remove('show');
});

async function workValue(rate) {
  value = ((rate * totalSeconds) / 3600) + ((rate * totalMinutes) / 60) + (rate * totalHours)
  console.log(value);
  earnedWage.innerHTML = value;
  return value;
}

saveTimeBtn.addEventListener('click', () => {
  // var min = minuteTotal.innerHTML
  // console.log(min);
  // var m = (Math.round(min/15) * 15) % 60;
  // console.log(m);
  var sec = secondTotal.innerHTML
  console.log(sec);
  var s = (Math.round(sec/15) * 15) % 60;
  console.log(s);
  
});

const saveTime = async (event) => {
  event.preventDefault();

  var sec = secondTotal.innerHTML;
  var s = (Math.round(sec/15) * 15) % 60;
  var min = minuteTotal.innerHTML;
  var m = (Math.round(min/15) * 15) % 60;
  var hr = hourTotal.innerHTML;

  if (sec && min && hr) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ sec, min, hr }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      res.render('project');
    } else {
      alert('Failed to save time to database');
    }
  }
};