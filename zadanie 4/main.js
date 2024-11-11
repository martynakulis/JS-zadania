let size = 10;
let orderElement = 1;

const init = () => {
  // tutaj kod
  const btn = document.createElement("button");
  btn.textContent = "Dodaj 10 elementów listy";
  document.body.appendChild(btn);
  const list = document.createElement("ul");
  document.body.appendChild(list);
  btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  // tutaj kod

  for (let i = 0; i < 10; i++) {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    list.appendChild(li);

    li.textContent = `Element ${orderElement}`;
    orderElement++;
    li.style.fontSize = size + "px";
    size++;
  }
};

init();
