const contentText = document.querySelector("#contentText p");
const text = contentText.innerText.split("\n");
const btnMore = document.getElementById("btnMore");
const btnHidden = document.getElementById("btnHidden");
const favorite = document.getElementById('favorite');
const noFavorite = document.getElementById('noFavorite');

contentText.innerHTML = text[0];

// 더보기 이벤트
btnMore.addEventListener("click", () => {
  contentText.innerText = text;
  btnMore.style.display = "none";
  btnHidden.style.display = "block";
});

// 숨기기 이벤트
btnHidden.addEventListener("click", () => {
  contentText.innerHTML = text[0];
  btnHidden.style.display = "none";
  btnMore.style.display = "block";
});

// 좋아요 이벤트
favorite.addEventListener('click', () => {
  noFavorite.style.display = 'inline';
  favorite.style.display = 'none';
});

// 좋아요 취소 이벤트
noFavorite.addEventListener('click', () => {
  favorite.style.display = 'inline';
  noFavorite.style.display = 'none';
});