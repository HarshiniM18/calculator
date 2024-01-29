var display = document.getElementById('display');
  var currentInput = '';

  function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
  }

  function performOperation(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
  }

  function calculateResult() {
    try {
      var result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = 'Error';
    }
  }

  function clearDisplay() {
    currentInput = '';
    display.value = '';
  }

  document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
      // Allow numbers, dot, and operators
      if (key === '.' && currentInput.includes('.')) {
        // Prevent multiple dots
        return;
      }
      currentInput += key;
      display.value = currentInput;
    } else {
      // Show warning for non-number keys
      alert('Only numbers are allowed');
    }
  });