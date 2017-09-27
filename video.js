let video = document.getElementById("bgvid");

function vidFade() {
  video.classList.add("stopfade");
}
video.addEventListener("ended", function() {
  // to capture IE10
  vidFade();
});
