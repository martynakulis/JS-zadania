// http://websamuraj.pl/examples/js/projekt11/

const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let active = false;
let index;

function handleStart() {
  if (!active) {
    startBtn.textContent = "Pause";
    active = !active;
    index = setInterval(() => {
      time++;
      panel.textContent = (time / 100).toFixed(2);
    }, 10);
  } else {
    active = !active;

    clearInterval(index);
    startBtn.textContent = "Start";
  }
}
const reset = () => {
  clearInterval(index);
  active = false;
  panel.textContent = "---";
  startBtn.textContent = "Start";
};

startBtn.addEventListener("click", handleStart);
resetBtn.addEventListener("click", reset);
