//변수지정
var heading = document.getElementsByClassName("panel-heading"),
  answer = document.getElementsByClassName("panel-body"),
  firstHeading = document.getElementsByClassName("active"),
  firstBody = document.getElementById("thisone"),
  question = document.getElementsByClassName("panel-question"),
  btnCollapse = document.getElementById("btn-collapse");
headingCounter = heading.length;

console.log();
// 제목을 클릭하면 할일
for (var i = 0; i < headingCounter; i++) {
  //헤딩들 마다 할 일
  heading[i].addEventListener("click", function () {});
}

//
