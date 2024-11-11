// tutaj rozwiązanie
const btn = document.querySelector("button");
const listItems = document.querySelectorAll("li");

let size = 10;

const handleClick = () => {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.display = "block";
    listItems[i].style.fontSize = size + "px";
  }
  size++;
};

btn.addEventListener("click", handleClick);
