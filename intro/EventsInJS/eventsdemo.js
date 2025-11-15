const mouseBox = document.getElementById("mouseBox");
const mouseHover = document.getElementById("mousehover");

// Mouse click event
mouseBox.addEventListener("click", () => {
  mouseBox.style.backgroundColor = "lightblue";
  mouseBox.style.height = "100px";
  mouseBox.style.lineHeight = "100px";
  mouseBox.style.fontSize = "24px";
});

// Mouse hover event
mouseHover.addEventListener("mouseover", () => {
  mouseHover.style.backgroundColor = "lightgreen";
  mouseHover.style.height = "100px";
  mouseHover.style.lineHeight = "100px";
  mouseHover.style.fontSize = "24px";
});
mouseHover.addEventListener("mouseleave", () => {
  mouseHover.style.backgroundColor = "cyan";
});
