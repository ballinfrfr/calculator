let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
  }
}
