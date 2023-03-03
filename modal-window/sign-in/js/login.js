<script type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.js"></script>

const login = btnName => document.querySelector(`.social-login button[name=${btnName}`);

login("kakao").onclick = () => {
  console.log('kakao!!');

  Kokao.init('53452aafbdd91704dcca6b1911e6fbc4');
  
  function kakaoLogin() {
    Kokao.Auth.login({
      success: function (re) {
        Kokao.API.re
      }
    })
  } // kakaoLogin
}