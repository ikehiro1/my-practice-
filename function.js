// alert("初めまして")
let hamburgerGenre = (genre, thoughts) => {
  let nameText = document.querySelector("#hamburgerGenre");
//   console.log(thoughts)
//   nameText.innerHTML = genre;
  if (genre == "チーズバーガー") {
    console.log(1, thoughts);
  } else if (genre == "フィレオフィッシュ") {
    console.log(2, thoughts);
  } else {
    console.log(3, "食ったことない");
  }
}
window.addEventListener("click", () => {
  hamburgerGenre("アイス", "うまい");
});