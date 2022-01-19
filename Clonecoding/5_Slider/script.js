// 변수 지정
var sliderWrapper = document.getElementsByClassName("container"), //className container
  sliderContainer = document.getElementsByClassName("slider-container"), //className slider-container
  slides = document.getElementsByClassName("slide"), // className slide
  slideCount = slides.length, // 슬라이드 개수
  currentIndex = 0, //맨앞, 맨뒤 구분 > 버튼 삭제
  topHeight = 0, //슬라이드 높이 > 부모의 높이에 반영
  navPrev = document.getElementById("prev"), //아이디 prev 지정
  navNext = document.getElementById("next"); //아이디 next

//슬라이드의 높이 확인하여 부모의 높이로 지정하기
calulateTallestSlide();

function calulateTallestSlide() {
  /* for(시작;끝값(조건);증감) {
    실제로 반복할일
  }
  */
  for (var i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }

  sliderWrapper[0].style.height = topHeight + "px";
  sliderContainer[0].style.height = topHeight + "px";
}

// 슬라이드가 있으면 가로로 배열하기

gotslideleft();

function gotslideleft() {
  for (var i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + "%";
  }
}

// 슬라이드 이동 함수

// 버튼기능 업데이트 함수

// 버튼을 클릭하면 슬라이드 이동시키기

// 첫번째 슬라이드 먼저 보이도록 하기
