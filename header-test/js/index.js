const $ = (selector) => document.querySelector(selector);

// 메인페이지 - 회원 이미지 클릭 시 메뉴바 표시
$("#userImg").addEventListener("click", () => {
  if ($("#userImg").classList.toggle("toggle")) {
    $('.menubar').style.display = "block";
  } else {
    $('.menubar').style.display = "none";
  }
});

addEventListener('click', e => {
  console.log(e.target.id)
  if (e.target.id !== "userImg") {
    $('.menubar').style.display = "none";
  }
})