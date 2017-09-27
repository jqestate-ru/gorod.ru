let video = document.getElementById("bgvid");

function vidFade() {
  video.classList.add("stopfade");
}
vid.addEventListener("ended", function() {
  // to capture IE10
  vidFade();
});
