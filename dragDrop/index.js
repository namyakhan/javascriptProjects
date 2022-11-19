const active = document.querySelector(".active");
const inactive = document.querySelectorAll(".inactive");

//adding Event Listeners to active container
active.addEventListener("dragstart", (e) => {
  active.classList.add("hold");
  setTimeout(() => (active.className = "invisible"), 0);
});

active.addEventListener("dragend", () => {
  active.className = "active";
});

//adding Event listeners to inactive containers
inactive.forEach((el) => {
  el.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  el.addEventListener("dragenter", (e) => {
    e.preventDefault();
    //appends hovered class
    el.classList.add("hovered");
  });
  el.addEventListener("dragleave", () => {
    //replaces with inactive class
    el.className = "inactive";
  });
  el.addEventListener("drop", () => {
    el.className = "inactive";
    el.append(active);
  });
});
