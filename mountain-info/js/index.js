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

// 메인페이지 - Rank에서 특정 왕 hover시 1 ~ 3위까지 보여주는 랭크목록 표시


// 메인페이지의 산정보, 모집, 후기 글에 대한 가로 슬라이드 구현
// 조건: 타겟(.wrap)위엣 마우스를 스크롤 할 때
// 강제 shift를 적용해서 휠로 좌/우 이동이 되게 할 것
// 2023-02-14: 마우스 휠로 가로 스크롤을 움직이게 하는 방법은
//             세로 스크롤까지 같이 움직여서 좌/우버튼이나 드래그 방식을 생각해야 할듯
// $(".wrap").addEventListener("wheel", (e) => {
//   // document.body.style.overflow = "hidden";
//   // console.log(window.scrollTop);
//   e.currentTarget.scrollBy(e.deltaY * 3, 0);
//   console.log(e.currentTarget);
// });
// $(".wrap").addEventListener("mouseout", (e) => {
//   console.log('mouseout')
// });





