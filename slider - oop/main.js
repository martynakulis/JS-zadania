// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide)
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/

const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
  },
];

class Slide {
  constructor(image, text) {
    this.image = image;
    this.text = text;
  }
}
class Slider {
  constructor(
    slideList,
    imageSelector,
    titleSelector,
    dotsSelector,
    time,
    active = 0
  ) {
    this.image = document.querySelector(imageSelector);
    this.title = document.querySelector(titleSelector);
    this.dots = [...document.querySelectorAll(dotsSelector)];
    this.time = time;
    this.active = active;
    this.slides = [];
    this.indexInterval = null;
    for (const slide of slideList) {
      this.addSlide(new Slide(slide.img, slide.text));
    }

    window.addEventListener("keydown", (e) => this.keyChangeSlide(e));
  }
  addSlide(slide) {
    this.slides.push(slide);
  }
  start() {
    this.indexInterval = setInterval(() => this.changeSlide(), this.time);
  }
  changeDot() {
    const activeDot = this.dots.findIndex((dot) =>
      dot.classList.contains("active")
    );
    this.dots[activeDot].classList.remove("active");
    this.dots[this.active].classList.add("active");
  }

  changeSlide() {
    this.active++;
    if (this.active === this.slides.length) {
      this.active = 0;
    }
    this.image.src = this.slides[this.active].image;
    this.title.textContent = this.slides[this.active].text;
    this.changeDot();
  }

  keyChangeSlide(e) {
    if (e.keyCode === 37 || e.keyCode === 39) {
      clearInterval(this.indexInterval);
      e.keyCode === 37 ? this.active-- : this.active++;
      if (this.active === this.slides.lenght) {
        this.active = 0;
      } else if (this.active < 0) {
        this.active = this.slides.lenght - 1;
      }
      this.image.src = this.slides[this.active].image;
      this.title.textContent = this.slides[this.active].text;
      this.changeDot();

      this.start();
    }
  }
}

const slider = new Slider(
  slideList,
  "img.slider",
  "h1.slider",
  ".dots span",
  3000
);
slider.start();
