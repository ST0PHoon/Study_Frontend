//변수지정
var heading = document.getElementsByClassName("panel-heading"),
  answer = document.getElementsByClassName("panel-body"),
  firstHeading = document.getElementsByClassName("active"),
  firstBody = document.getElementById("thisone"),
  question = document.getElementsByClassName("panel-question"),
  btnCollapse = document.getElementById("btn-collapse");
// 제목을 클릭하면 할일
for (var i = 0; i < heading.length; i++) {
  //헤딩들 마다 할 일
  heading[i].addEventListener("click", function (ev) {
    for (var j = 0; j < question.length; j++) {
      question[j].classList.remove("active");
      //클릭한 heading 위의 부모 태그에 active 추가
      ev.target.parentNode.classList.add("active");
      activateBody();
    }
  });
}
function activateBody() {
  //panel-body 모두 안보인다
  for (var x = 0; x < answer.length; x++) {
    answer[x].style.display = "none";
  }
  //panel-question 에 active 가 있으면 panel-body가 보이게한다.
  //.panel-question.active .panel-body +붙여서 . 찍으면 같은 클래스, 하나 띄우면 자식요소
  var activePanel = document.querySelector(
    ".panel-question.active .panel-body"
  );
  activePanel.style.display = "block";
}
activateBody();

//collapse all 버튼을 클릭하면 모든 answer 안보이도록 하시오
btnCollapse.addEventListener("click", function () {
  for (var i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
  }
});
