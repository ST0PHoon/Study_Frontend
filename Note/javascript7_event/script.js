var btn = document.getElementById("submit"),
  container = document.querySelector(".container");

//이벤트 설정하기 addEventListener('상황',할일 function)
//click
btn.addEventListener("click", function () {
  //실제로 일어날 일
  btn.style.color = "red";
  console.log("버튼이 클릭되었습니다.");
});
container.addEventListener("mouseenter", function () {
  console.log("마우스가 들어왔어요");
});

container.addEventListener("mouseleave", function () {
  console.log("마우스가 나갔어요.");
});
