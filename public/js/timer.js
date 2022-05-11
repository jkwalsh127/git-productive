
const timer = document.getElementById('timer');
const modalContainer = document.getElementById('modal-container');
const continueBtn = document.getElementById('continue');

  var hr = 0;
  var min = 0;
  var sec = 0;
  var stoptime = true;
  
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
  
  function timerCycle() {
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



      console.log(breakTime);
      console.log(sec);
      if (breakTime == sec) {
        stopTimer();
        modalContainer.classList.add('show');
      }
  
      setTimeout("timerCycle()", 1000);
    }
  }
  
  function resetTimer() {
      timer.innerHTML = '00:00:00';
  }

continueBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});