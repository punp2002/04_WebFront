const resName = document.querySelector("#resName");
const resNameInput = document.querySelector("#resNameInput");
const updateBtn = document.querySelector("#updateBtn");
const normalContainer = document.querySelector(".normal-container");
const editContainer = document.querySelector(".edit-container");
const exitBtn = document.querySelector("#exitBtn");
const addMenu = document.querySelector("#addMenu");
const menucontainer = document.querySelector(".menu-container");

resName.addEventListener("click", () => {

  resName.style.display = "none";
  resNameInput.style.display = "inline";  
  resNameInput.focus();
});


resNameInput.addEventListener("blur", () => {
  resName.textContent = resNameInput.value || "식당명을 입력하세요";
  resName.style.display = "inline";
  resNameInput.style.display = "none";
});

updateBtn.addEventListener("click", () => {
  normalContainer.style.display = "none";
  editContainer.style.display = "block";
  
});

exitBtn.addEventListener("click", () => {
  normalContainer.style.display = "block";
  editContainer.style.display = "none";
});

addMenu.addEventListener("click", () => {
    // 내용을 "CSS선택자로 선택해서 값 변경됨" 변경해보기
<div target-div="css-div"></div>
     

  const li = document.createElement("li");  
  li.classList.add("menu");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("menu-check");
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "메뉴명");
  input1.classList.add("menu-name-input");
  const input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "가격");
  input2.classList.add("menu-price-input");

  li.append(input, input1, input2);

  menucontainer.append(li);
});