const mainContainer = document.querySelector(".container");

for (i = 0; i < 255; i++) {
  const div = document.createElement("div");
  div.classList.add("item");
  mainContainer.appendChild(div);
}

const items = document.querySelectorAll(".item");
console.log(items);

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.toggle("trail");
  });
});

var gridSquares = 0;
const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", () => {
  gridSquares = parseInt(prompt("Enter the grid dimension "));
  while (gridSquares > 100 || isNaN(gridSquares)) {
    gridSquares = parseInt(prompt("Enter the grid dimension "));
  }
});
