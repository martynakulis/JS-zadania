let size = 10;
let grow = true;

document.body.style.height = "10000px";
const div = document.createElement("div");
document.body.appendChild(div);
div.style.width = "100%";
div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";
div.style.backgroundColor = "green";
div.style.height = size + "px";

const changeHeight = () => {
  if (size > window.innerHeight / 2) {
    grow = false;
    div.style.backgroundColor = "red";
  } else if (size <= 0) {
    grow = true;
    div.style.backgroundColor = "green";
  }
  if (grow) {
    size += 10;
    div.style.height = size + "px";
  } else {
    size -= 10;
    div.style.height = size + "px";
  }
};

window.addEventListener("scroll", changeHeight);
