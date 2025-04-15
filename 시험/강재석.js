document.getElementById("changeButton").addEventListener("click", function () {
  const box = document.getElementById("outputBox");
  const text = document.getElementById("outputText");

  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const fontSize = document.getElementById("fontSize").value;
  const textColor = document.getElementById("textColor").value;
  const bgColor = document.getElementById("bgColor").value;
  const bold = document.querySelector('input[name="bold"]:checked').value;
  const aline = document.querySelector('input[name="aline"]:checked').value;
  const bline = document.querySelector('input[name="bline"]:checked').value;
  const content = document.getElementById("textInput").value;

  box.style.width = width + "px";
  box.style.height = height + "px";
  box.style.backgroundColor = bgColor;
  box.style.justifyContent = aline;
  box.style.alignItems = bline;

  text.style.fontSize = fontSize + "px";
  text.style.color = textColor;
  text.style.fontWeight = bold;
  text.textContent = content;
});