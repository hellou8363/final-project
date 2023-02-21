const mountains = [
  "가리산",
  "가리왕산",
  "가야산",
  "가지산",
  "감악산",
  "강천산",
  "계룡산",
  "계방산",
  "공작산",
  "관악산",
  "구병산",
  "금산",
  "금수산",
  "금오산",
  "금정산",
  "깃대봉",
  "남산(금오산)",
  "내연산",
  "내장산",
  "대둔산",
  "대암산",
  "대야산",
  "덕숭산(수덕산)",
  "덕유산",
  "덕항산",
  "도락산",
  "도봉산",
  "두륜산",
  "두타산",
  "마니산",
  "마이산",
  "명성산",
  "명지산",
  "모악산",
  "무등산",
  "무학산",
  "미륵산",
  "민주지산",
  "방장산",
  "방태산",
  "백덕산",
  "백암산",
  "백운산(광양)",
  "백운산(정선)",
  "백운산(포천)",
  "변산",
  "북한산",
  "비슬산",
  "삼악산",
  "서대산",
  "선운산",
  "설악산",
  "성인봉",
  "소백산",
  "소요산",
  "속리산",
  "신불산",
  "연화산",
  "오대산",
  "오봉산",
  "용문산",
  "용화산",
  "운문산",
  "운악산",
  "운장산",
  "월악산",
  "월출산",
  "유명산",
  "응봉산",
  "장안산",
  "재약산",
  "적상산",
  "점봉산",
  "조계산",
  "주왕산",
  "주흘산",
  "지리산",
  "지리산",
  "천관산",
  "천마산",
  "천성산",
  "천태산",
  "청량산",
  "추월산",
  "축령산",
  "치악산",
  "칠갑산",
  "태백산",
  "태화산",
  "팔공산",
  "팔봉산",
  "팔영산",
  "한라산",
  "화악산",
  "화왕산",
  "황매산",
  "황석산",
  "황악산",
  "황장산",
  "희양산",
];

// select에 산 이름 출력
mountains.map(
  (value) =>
    ($$(
      ".select-mountain select"
    ).innerHTML += `<option value="${value}">${value}</option>`)
);

// 등록 버튼 이벤트
$$(".buttons #upload").addEventListener("click", () => {
  $$(".check-again .upload").style.display = "block";
});

// 취소 버튼 이벤트
$$(".buttons #cancle").addEventListener("click", () => {
  $$(".check-again .cancel").style.display = "block";
});

// 이미지 추가 버튼 클릭 이벤트
$$(".photo").addEventListener("click", () => {
  $$(".add-photo").style.display = "block";
});

// 이미지 추가 취소 버튼 클릭 이벤트
$$(".add-photo .cancel").addEventListener("click", () => {
  $$(".add-photo").style.display = "none";
});

// 등록 취소 버튼 클릭 이벤트
$$(".check-again .upload input[type=button]").addEventListener("click", () => {
  $$(".check-again .upload").style.display = "none";
});

// 삭제 취소 버튼 클릭 이벤트
$$(".check-again .cancel input[type=button]").addEventListener("click", () => {
  $$(".check-again .cancel").style.display = "none";
});

// 작성 취소(삭제) 버튼 클릭 이벤트
$$(".check-again .cancel input[type=reset]").addEventListener("click", () => {
  $$(".check-again .cancel").style.display = "none";
});

// ------------------------------------------------------------ 수정 중

const getTextFile = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = function (event) {
    processFile(event.target.files[0]);
    console.log(event);
  };
  input.click();
};

const processFile = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    $$(".photo").innerHTML = `
    <img name="ImagePath" src="${reader.result}" value="${reader.result}" alt="모집 글 작성 폼 이미지"></img>
    <input type="text" name="imagePath" id="imagePath" value="${reader.result}">`;
  };
};

// 드래그 앤 드롭 이벤트
$$(".drag-and-drop").ondrop = (e) => {
  e.preventDefault();

  const files = [...e.dataTransfer?.files];
  console.log(files);

  $$(".drag-and-drop").innerHTML = `<p>${files[0].name}</p>`;
};

$$(".drag-and-drop").ondragover = (e) => e.preventDefault();
$$(".drag-and-drop").ondragleave = (e) => e.preventDefault();

// 변경 버튼 클릭 이벤트
$$(".drag-and-drop + button").onclick = () => {
  $$(".add-photo").style.display = "none";
};

// 드래그 앤 드롭 대신 클릭으로 업로드 할 때
$$(".drag-and-drop").onclick = () => getTextFile();
