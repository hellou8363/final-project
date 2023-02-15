const $ = (selector) => document.querySelector(selector);

// Event init
addEventListener("click", (e) => {
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

// 메인페이지 - 산정보, 모집, 후기 글 목록 위에서
// 휠 스크롤 시 가로 슬라이드 구현
$(".mountain-info .wrap").addEventListener("wheel", (e) => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY * 2;
});

$(".recruit .wrap").addEventListener("wheel", (e) => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY * 2;
});

$(".review .wrap").addEventListener("wheel", (e) => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY * 2;
});