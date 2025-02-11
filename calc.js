var a = "";
var b = "";
var sign = "";
let finish = false;
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const action = ["-", "+", "÷", "×"];
const display = document.getElementById("display");

function clearAll() {
  var a = "";
  var b = "";
  var sign = "";
  let finish = false;
  display.textContent = "0";
}
document.getElementById("cAll").onclick = clearAll;

document.getElementsByClassName(".btn").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("CK")) return;
  display.textContent = "";
  const key = event.target.textContent;
  if (digit.includes(key)) {
    a += key;
    console.log(a, b, sign);
    display.textContent(a)
  }
}

