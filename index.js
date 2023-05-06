const mainContainer = document.querySelector(".container");
var gridSquares = 16;

function drawGrid(gridDimensions) {
  for (i = 0; i < gridDimensions * gridDimensions; i++) {
    const div = document.createElement("div");
    let width = 480 / gridDimensions;
    let height = 480 / gridDimensions;
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.classList.add("item");
    mainContainer.appendChild(div);
  }
}
drawGrid(gridSquares);

function deleteGrid() {
  items.forEach((item) => {
    mainContainer.removeChild(item);
  });
}
var items = document.querySelectorAll(".item");
addListener(items);

function addListener(items) {
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.toggle("trail");
    });
  });
}

const gridDimensions = document.querySelector("#grid-size");
gridDimensions.addEventListener("click", () => {
  gridSquares = parseInt(prompt("Enter the grid dimension "));
  while (gridSquares > 64 || isNaN(gridSquares)) {
    gridSquares = parseInt(prompt("Enter the grid dimension "));
  }
  deleteGrid();
  drawGrid(gridSquares);
  items = document.querySelectorAll(".item");
  addListener(items);
});
