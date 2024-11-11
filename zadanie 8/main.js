let options = ["walcz!", "przemyśl to jeszcze raz!"];

const addOption = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  options.push(input.value);
  alert(`dodana została opcja${input.value}`);
  input.value = "";
};
const reset = (e) => {
  e.preventDefault();
  options = [];
  document.querySelector("h1").textContent = "";
};

const showOption = (e) => {
  e.preventDefault();
  alert(options.join(", "));
};
const showAdvice = (e) => {
  e.preventDefault();
  const index = Math.floor(Math.random() * options.length);
  document.querySelector("h1").textContent = options[index];
};

document.querySelector(".add").addEventListener("click", addOption);
document.querySelector(".showAdvice").addEventListener("click", showAdvice);
document.querySelector(".clean").addEventListener("click", reset);
document.querySelector(".showOptions").addEventListener("click", showOption);
