const boxGift = document.querySelector(".box-gift");
const Close = document.querySelector(".fa-xmark");
const boxContent = document.querySelector(".box-content");
const content = document.querySelector(".content");

const volumeXmark = document.querySelector(".volume-xmark");
const volumeHigh = document.querySelector(".volume-high");
const audio = document.querySelector("#audio");

boxGift.onclick = function () {
  boxGift.classList.toggle("active");
};
content.onclick = function () {
  boxContent.classList.add("active");
};
Close.onclick = function () {
  boxContent.classList.remove("active");
};

volumeXmark.onclick = function () {
  audio.play();
  volumeXmark.classList.add("hidden");
  volumeHigh.classList.remove("hidden");
};

volumeHigh.onclick = function () {
  audio.pause();
  volumeHigh.classList.add("hidden");
  volumeXmark.classList.remove("hidden");
};
