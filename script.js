const calc = []
const output = document.getElementById("output")
output.textContent = 0
let justOperated = false

function multiplication() {
  operatorIndex = calc.indexOf('*');
  a = parseFloat(calc[operatorIndex - 1]);
  b = parseFloat(calc[operatorIndex + 1]);
  calc[operatorIndex - 1] = a * b;
  calc.splice(operatorIndex, 2);
}

function division() {
  operatorIndex = calc.indexOf('/');
  if (calc[operatorIndex + 1] == 0) {
    alert("You can't divide by zero! Resetting calculator...");
    clearCalc();
  } else {
    a = parseFloat(calc[operatorIndex - 1]);
    b = parseFloat(calc[operatorIndex + 1]);
    calc[operatorIndex - 1] = a / b;
    calc.splice(operatorIndex, 2);
  };
};

function addition() {
  operatorIndex = calc.indexOf('+');
  a = parseFloat(calc[operatorIndex - 1]);
  b = parseFloat(calc[operatorIndex + 1]);
  calc[operatorIndex - 1] = a + b;
  calc.splice(operatorIndex, 2);
};

function subtraction() {
  operatorIndex = calc.indexOf('-');
  a = parseFloat(calc[operatorIndex - 1])
  b = parseFloat(calc[operatorIndex + 1])
  calc[operatorIndex - 1] = a - b;
  calc.splice(operatorIndex, 2);
};

function inputNumber(number) {
  let last = calc.length - 1;
  if (calc.length % 2 === 0) {
    calc.push(number);
  } else if (justOperated) {
    calc[0] = number;
    justOperated = false;
  } else if (calc[last] === '-0') {
    calc[last] = '-' + number;
  } else {
    calc[last] = calc[last] + number;
  }
  last = calc.length - 1;
  output.textContent = calc[last];
};

function inputDecimal() {
  let last = calc.length - 1;
  if (calc.length % 2 === 0) {
    inputNumber('0.')
  } else if (calc[last].includes('.') === false) {
    inputNumber('.');
  };
};

function makeNegative() {
  let last = calc.length - 1;
  if (calc.length % 2 === 1) {
    calc[last] = calc[last] * -1;
  } else if (calc.length % 2 === 0) {
    calc.push('-0');
    last = calc.length - 1;
  };
  output.textContent = calc[last];
}

function inputOperator(operator) {
  let last = calc.length - 1;
  if (calc.length % 2 === 1) {
    calc.push(operator);
  } else if (calc.length % 2 === 0) {
    calc[last] = operator;
  };
  last = calc.length - 1;
  output.textContent = calc[last - 1] + ' ' + calc[last];
};

function operate() {
  if (calc.length % 2 === 0) {
    calc.pop();
  };
  while (calc.includes('*') || calc.includes('/')) {
    if (calc.indexOf('/') === -1) {
      multiplication();
    } else if (calc.indexOf('*') === -1) {
      division();
    } else if (calc.indexOf('*') < calc.indexOf('/')) {
      multiplication();
    } else if (calc.indexOf('*') > calc.indexOf('/')) {
      division();
    };
  };
  while (calc.length > 1) {
    if (calc[1] == '+') {
      addition();
    } else if (calc[1] == '-') {
      subtraction();
    };
  };
  if (calc.length === 0) {
    justOperated = false
    output.textContent = 0;
  } else {
    justOperated = true;
    output.textContent = Math.round(calc[0] * 100000000) / 100000000;
  };
};

function clearCalc() {
  calc.length = 0;
  output.textContent = 0;
  justOperated = false;
};

function addKeyboardListeners() {
  addEventListener('keydown', function(event) {
    if (event.key >= 0 || event.key <= 9) {
      inputNumber(event.key);
    } else if (event.key == '.') {
      inputDecimal();
    } else if (event.key.match(/[*+/-]/)) {
      inputOperator(event.key);
    } else if (event.key == '=' || event.key == 'Enter') {
      operate();
    } else if (event.key == 'Delete') {
      clearCalc();
    };
  });
};

addKeyboardListeners();