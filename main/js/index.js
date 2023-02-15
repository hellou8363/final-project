const $ = (selector) => document.querySelector(selector);

// Event init
addEventListener("click", (e) => {
  // 메인페이지 - 회원 메뉴바가 열린상태에서 다른 곳을 클릭하면 메뉴바 숨기기
  if (e.target.id !== "userImg") {
    $("#userImg").classList.remove("toggle");
    $(".menubar").style.display = "none";
  } // if

  // temp code - Rank의 하위 div를 벗어날 시 hover로 활성화된 박스 제거
  if (e.target.className.indexOf("king") < 0) {
    // console.log(e.target.className.indexOf("king"));
    $(".zoom-rankers-top3").style.display = "none";
  }
});

// 메인페이지 - 회원 이미지 클릭 시 메뉴바 표시
$("#userImg").addEventListener("click", () => {
  if ($("#userImg").classList.toggle("toggle")) {
    $(".menubar").style.display = "block";
  } else {
    $(".menubar").style.display = "none";
  }
});


// 메인페이지 - Rank에서 특정 왕 hover시 1 ~ 3위까지 보여주는 랭크목록 표시
// $(".deep-king").addEventListener("mouseover", () => {
//   $(".zoom-rankers-top3").style.display = "block";
// });

// $(".high-king").addEventListener("mouseover", () => {
//   $(".zoom-rankers-top3").style.display = "block";
// });

// $(".true-king").addEventListener("mouseover", () => {
//   $(".zoom-rankers-top3").style.display = "block";
// });

// $(".review-king").addEventListener("mouseover", () => {
//   $(".zoom-rankers-top3").style.display = "block";
// });


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