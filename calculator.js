function display(value) {
  document.getElementById("scr").value += value;
}

function calculate() {
  let value = document.getElementById("scr").value;
  let answer = eval(value);
  document.getElementById("scr").value = answer;
}

function allClear() {
  document.getElementById("scr").value = "";
}

