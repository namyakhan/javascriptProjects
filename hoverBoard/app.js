const container = document.getElementById("container");
const colors = [
  "#B20600",
  "#A149FA",
  "#3330E4",
  "#F15412",
  "#357C3C",
  "#EE81B3",
  "#34B3F1",
  "#FBCB0A",
];
const squareBoxes = 979;

//looping through the square boxes
for (let i = 0; i <= squareBoxes; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  container.appendChild(square);
}

//Functions
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "rgb(52, 51, 51)";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
