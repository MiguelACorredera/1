let display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function calculate() {
  try {
    display.value = eval(display.value); // (ok for practice)
  } catch {
    display.value = "ERR";
  }
}

function clearAll() {
  display.value = "";
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}