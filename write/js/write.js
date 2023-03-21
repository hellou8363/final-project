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

let imgPath; // 업로드 이미지 임시 저장 변수
let isReadyUpload = false; // 파일 업로드 가능여부

// search-bar 제거
selector(".search-bar").remove();

// 날짜 지정 시 이전 날짜 지정 방지 이벤트
const date = new Date();
const today = `${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()
}-${date.getDate()}`;
selector("#date").min = today;

// select에 산 이름 출력
mountains.map(
  (value) =>
    (selector(
      ".select-mountain select"
    ).innerHTML += `<option value="${value}">${value}</option>`)
);

// 취소 버튼 이벤트
selector("#cancle").addEventListener("click", () => {
  selector(".check-again .unload").style.display = "block";
});

// 이미지 추가 버튼 클릭 이벤트
selector(".photo").addEventListener("click", () => {
  selector(".drag-and-drop").innerHTML = `
  <div class="picture"></div>
  <p>
    여기로 이미지를 드래그하거나<br />
    파일을 업로드 하세요.
    (최대 20MB)
  </p>`;
  selector(".add-photo").style.display = "block";
  $(".add-photo").attr("tabindex", -1).focus();

});

// 이미지 추가 취소 버튼 클릭 이벤트
selector(".add-photo .cancel").addEventListener("click", () => {
  selector(".add-photo").style.display = "none";
});

// 등록 취소 버튼 클릭 이벤트
selector(".check-again .upload input[type=button]").addEventListener("click", () => {
  selector(".check-again .upload").style.display = "none";
});

// 삭제 취소 버튼 클릭 이벤트
selector(".check-again .unload input[type=button]").addEventListener("click", () => {
  selector(".check-again .unload").style.display = "none";
});

// 작성 취소(삭제) 버튼 클릭 이벤트
selector(".check-again .unload input[type=reset]").addEventListener("click", () => {
  selector(".check-again .unload").style.display = "none";
});

const getTextFile = () => {
  const input = document.createElement("input");

  input.type = "file";
  input.accept = ".jpg, .jpeg, .png";

  input.onchange = (event) => {
    // 업로드 파일 용량 체크
    if (isFileMaxSize(event.target.files)) {
      return false;
    } // if

    // 파일형식 체크
    if (isRightFile(event.target.files)) {
      return false;
    } // if

    // 위 조건을 모두 통과할 경우
    isReadyUpload = true;
    processFile(event.target.files[0]);
  };

  input.click();
};

const processFile = (file) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    selector(".drag-and-drop").innerHTML = `<p>${file.name}</p>`;

    imgPath = `<img name="imgFile" src="${reader.result}" value="${reader.result}" alt="모집 글 작성 폼 이미지"></img>
    <input class="blind" type="file" name="imgFile" id="imagePath">`;
  };
};

// 업로드 파일 용량 체크
const isFileMaxSize = (files) => {
  if (files[0].size > 20971520) {
    selector(".drag-and-drop").innerHTML = `
    <p>최대 업로드 용량은 20MB입니다.<br>
    현재 파일의 용량은 ${Math.floor((files[0].size / 1048576) * 10) / 10}입니다.
    </p>`;

    isReadyUpload = false;
    return true;
  } // if
};

// 파일형식 체크
const isRightFile = (files) => {
  if (
    files[0].type !== "image/jpeg" &&
    files[0].type !== "image/png" &&
    files[0].type !== "image/jpg"
  ) {
    selector(".drag-and-drop").innerHTML = `
    <p>업로드 가능한 파일 형식은<br>
    .jpg, .jpeg, .png입니다.
    </p>`;

    isReadyUpload = false;
    return true;
  } // if
};

// 드래그 앤 드롭 이벤트
// 업로드 최대 용량: 20,971,520byte(20MB)
selector(".drag-and-drop").ondrop = (e) => {
  e.preventDefault();

  const files = [...e.dataTransfer?.files];

  // 업로드 파일 용량 체크
  if (isFileMaxSize(files)) {
    return false;
  } // if

  // 파일형식 체크
  if (isRightFile(files)) {
    return false;
  } // if

  // 위 조건을 모두 통과할 경우
  isReadyUpload = true;

  selector(".drag-and-drop").innerHTML = `<p>${files[0].name}</p>`;

  handleUpdate([...files]);
};

// 드래그 앤 드롭 한 이미지를 imgPath에 담기
const handleUpdate = (files) => {
  selector(".drag-and-drop").innerHTML = `<p>${files[0].name}</p>`;

  files.forEach((file) => {
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      imgPath = `<img src="${e.target.result}" value="${e.target.result}" alt="모집 글 작성 폼 이미지"></img>
      <input class="blind" type="file" name="imgFile" value="${e.target.result}">`;
    });

    reader.readAsDataURL(file);
  });
};

// 작성 중 취소 -> 예(Red Button)이벤트
selector(".unload input[type=reset]").onclick = () => {
  const elem = selector(".photo");

  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  } // while
};

// 드래그 앤 드롭으로 파일 업로드 하기 위한 기본 이벤트 방지
selector(".drag-and-drop").ondragover = (e) => e.preventDefault();
selector(".drag-and-drop").ondragleave = (e) => e.preventDefault();

// 변경 버튼 클릭 이벤트
selector(".drag-and-drop + button").onclick = (e) => {
  if (imgPath === undefined || !isReadyUpload) {
    return false;
  }
  selector(".add-photo").style.display = "none";
  selector(".photo").innerHTML = imgPath ?? "";
};

// 드래그 앤 드롭 대신 클릭으로 업로드 할 때
selector(".drag-and-drop").onclick = () => getTextFile();

// 필수입력사항 안내창 확인 클릭 이벤트
const alertWindow = (item) =>
  (selector(".alert-window button").onclick = () => {
    selector(".alert-window").style.display = "none";
    item.focus();
  });

selector("#upload").onclick = (e) => {
  e.preventDefault();

  formCheck();
};

// 모집 글 작성 폼 검증
const formCheck = () => {
  const form = document.forms[0];
  const alert = () => {
    selector(".alert-window").style.display = "flex";
    $(".alert-window").attr("tabindex", -1).focus();
  }

  if (form.elements.mountainName.value === "") {
    alert();
    alertWindow(selector("select[name=mountainName]"));
    return false;
  } // if

  if (form.elements.title.value.length < 2) {
    alert();
    alertWindow(selector("#title"));
    return false;
  } // if

  if (form.elements.date.value === "") {
    alert();
    alertWindow(selector("#date"));
    return false;
  } // if

  if (form.elements.time.value === "") {
    alert();
    alertWindow(selector("#time"));
    return false;
  } // if

  if (form.elements.member.value < 2 || form.elements.member.value > 45) {
    alert();
    alertWindow(selector("#member"));
    return false;
  } // if

  // form value 모든 검증이 끝난 후
  // 등록 버튼 이벤트 수행
  selector("#upload").click();

  selector("#upload").onclick = () => {
    selector(".check-again .upload").style.display = "block";
    $(".check-again .upload").attr("tabindex", -1).focus();
  };
};

// Enter키로 인한 submit 방지 이벤트
document.forms[0].addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.id !== "text") {
    e.preventDefault();
    return false;
  } // if
});