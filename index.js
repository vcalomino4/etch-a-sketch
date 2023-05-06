const mainContainer = document.querySelector(".container");

for (i = 0; i < 255; i++) {
  const div = document.createElement("div");
  div.classList.add("item");
  mainContainer.appendChild(div);
}
