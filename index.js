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
