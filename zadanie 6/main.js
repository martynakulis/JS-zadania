/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch
  // if (e.keyCode === 38) {
  //   if (red < 255) {
  //     red++;
  //     green++;
  //     blue++;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   }
  //   //
  // } else if (e.keyCode === 40) {
  //   if (red >= 0) {
  //     red--;
  //     green--;
  //     blue--;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   }
  // }
  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red}, ${
        green < 255 ? green++ : green
      }, ${blue < 255 ? blue++ : blue})`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red > 0 ? red-- : red}, ${
        green > 0 ? green-- : green
      }, ${blue > 0 ? blue-- : blue})`;
      break;
  }
};
window.addEventListener("keydown", changeColor);
