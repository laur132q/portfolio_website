var container = document.querySelector(".container");
var image = [
  "imagesTema4\1.jpg",
  "imagesTema4\2.jpg",
  "imagesTema4\3.jpg",
  "imagesTema4\4.jpg",
  "imagesTema4\5.jpg",
  "imagesTema4\6.jpg",
  "imagesTema4\7.jpg",
];

var backward = document.querySelector(".backward")

var temaopgave = 0;

function forward() {
  temaopgave++;
  if (temaopgave > image.length - 1) {
    temaopgave = 0;
  }
  container.style.backgroundImage = `url(${image[temaopgave]})`;
}

function backward() {
  temaopgave--;
  if (temaopgave < 0) {
    temaopgave = image.length - 1;
  }
  container.style.backgroundImage = `url(${image[temaopgave]})`;
}
.addEventListener("click", toggleMenu);

addEventListener.click
