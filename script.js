function clearInput() {
  document.getElementById('inputbox').value = '';
}

function clearLastChar() {
  var inputBox = document.getElementById('inputbox');
  var currentInput = inputBox.value;
  inputBox.value = currentInput.slice(0, -1);
}

function appendToInput(value) {
  document.getElementById('inputbox').value += value;
}

function appendOperator(operator) {
  var inputBox = document.getElementById('inputbox');
  var currentInput = inputBox.value;
  var lastChar = currentInput.slice(-1);
  
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    inputBox.value = currentInput.slice(0, -1) + operator;
  } else {
    inputBox.value += operator;
  }
}

function calculate() {
  var inputBox = document.getElementById('inputbox');
  var expression = inputBox.value;
  
  try {
    var result = eval(expression);
    inputBox.value = result;
  } catch (error) {
    inputBox.value = 'Error';
  }
}



