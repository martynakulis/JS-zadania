const timer = (time = 0) => {
  let seconds = time;
  document.body.textContent = seconds + "sekund";
  function timeCounter() {
    seconds++;
    document.body.textContent = `${seconds} sekund`;
  }
  return timeCounter;
};

const timerCounter = timer();

setInterval(timerCounter, 1000);
