const form = document.querySelector("form");
const searchInput = document.querySelector("#search");
const list = document.querySelector("ul");
const tasks = document.getElementsByClassName("liElem");
const input = document.querySelector("form input");
const btn = document.querySelector("button");

const addElem = (e) => {
  e.preventDefault();
  const taskValue = input.value;
  if (!input.value) return;
  const liElem = document.createElement("li");
  liElem.innerHTML = taskValue + "  <button>Usuń</button>";
  liElem.className = "liElem";
  list.appendChild(liElem);
  input.value = "";
  const removeBtn = liElem.querySelector("button");
  removeBtn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
};

const search = (e) => {
  let elements = [...tasks];
  const text = e.target.value.toLowerCase();
  elements = elements.filter((li) =>
    li.textContent.toLowerCase().includes(text)
  );
  console.log(elements);
  list.textContent = "";
  elements.forEach((li) => list.appendChild(li));
};

btn.addEventListener("click", addElem);
searchInput.addEventListener("input", search);
