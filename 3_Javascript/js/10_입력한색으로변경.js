// 인풋 테크에 색상을 입력하고 색상변경 버튼 누르면 해당 색상으로 변경되도록


// 배경색 적용할 div 배열
const boxes = document.querySelectorAll(".box");

// 배경색 입력할 input 배열
const inputs = document.querySelectorAll(".color-input");


// const button = document.getElementById("changeButton");



// button.addEventListener("click", function() {

//   for (let i = 0; i < inputs.length; i++) {
//     let color = inputs[i].value;
    
//     if (!color) {
//       color = "white";
//     }

//   boxes[i].style.backgroundColor = color;
  
//   }

// });


document.querySelector('#changeButton').addEventListener("click", function(){
  for (let i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = inputs[i].value;
  }
})

