const $ = (selector) => document.querySelector(selector);

// Event init
addEventListener("click", (e) => {
  // console.log(e.target.id);
  // 메인페이지 - 회원 메뉴바가 열린상태에서 다른 곳을 클릭하면 메뉴바 숨기기
  if (e.target.id !== "userImg") {
    $("#userImg").classList.remove("toggle");
    $(".menubar").style.display = "none";
  } // if
});

// 메인페이지 - 회원 이미지 클릭 시 메뉴바 표시
$("#userImg").addEventListener("click", () => {
  if ($("#userImg").classList.toggle("toggle")) {
    $(".menubar").style.display = "block";
  } else {
    $(".menubar").style.display = "none";
  }
});
