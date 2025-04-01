const bomberman = document.querySelector('#img');
const box = document.getElementById('box');

bomberman.style.position = 'absolute';

document.addEventListener("keydown", function(){

  bomberman.style.transform = 변경된 좌표;

  // 'x' 라는 키를 누르면 box에 innerHTML += '<img 폭탄이미지>' 
  // box.innerHTML += ..을 실행하는 과정에서 DOM이 리렌더링됨 
  // 기존에 bomberman을 가리키던 const bomberman = document.querySelector 
  // 더이상 유효하지 않은 변수가 됨. bomberman.style.transform = 변경된 좌표;
  // 기존 변수인 bomberman은 더이상 유효한 DOM 요소가 아니기 때문에 스타일 변경이 적용 X
}) 



