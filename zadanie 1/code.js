let number = 1;

const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  const listElement = document.createElement("li");
  list.appendChild(listElement);
  listElement.textContent = number;

  if (number % 3 === 0) {
    listElement.classList.add("big");
  }
  number += 2;
});
