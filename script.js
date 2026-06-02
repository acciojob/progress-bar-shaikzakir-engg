//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const lineFill = document.getElementById("line-fill");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const progress = ((currentActive - 1) / (circles.length - 1)) * 100;
  lineFill.style.width = progress + "%";
}
