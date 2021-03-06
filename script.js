const intro = document.querySelector(".intro");
const video = document.querySelector(".first-video");
const secondVideo = document.querySelector(".second-video");
secondVideo.playbackRate = 0.7;
const text = document.querySelector("h1");
const section = document.querySelector("section");
const secondText = section.querySelector("h1");
secondVideo.play();
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);
let accelamount = 1.5;
let scrollpos = 0;
let delay = 0;
scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});
setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = scrollpos;
}, 35);
let playing = true;
secondVideo.onmouseover = function () {
  secondVideo.pause();
};
secondVideo.onmouseout = function () {
  secondVideo.play();
};
