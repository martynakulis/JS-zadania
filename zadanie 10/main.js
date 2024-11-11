// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3"];

let index = 0;
let indexText = -5;

// Implementacja
const addLetter = () => {
  // Użyj w środku setTimeout
  if (indexText >= 0) {
    spnText.textContent += txt[index][indexText];
  }
  indexText++;
  if (indexText === txt[index].length) {
    index++;
    if (index === txt.lengt) return;
    return setTimeout(() => {
      indexText = 0;
      spnText.textContent = "";
      addLetter();
    }, 1000);
  }
  setTimeout(addLetter, 100);
};

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
