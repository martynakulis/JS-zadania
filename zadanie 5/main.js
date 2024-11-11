// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony
const body = document.querySelector("body");

body.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  if (x % 2 === 0 && y % 2 === 0) {
    body.style.backgroundColor = "red";
  } else if (x % 2 === 1 && y % 2 === 1) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "green";
  }
  console.log(x, y);
});
