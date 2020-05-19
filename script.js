const calc = ['2', '+', '8', '/', '4', '-', '3', '*', '2', '+', '1']

function inputNumber(a) {

}

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  if (b === 0) {
    alert("Don't be cheeky, you can't divide by zero!")
  } else {
    return a / b;
  };
};

function multiplication() {
  operatorIndex = calc.indexOf('*');
  a = parseFloat(calc[operatorIndex - 1]);
  b = parseFloat(calc[operatorIndex + 1]);
  calculation = multiply(a, b);
  calc[operatorIndex - 1] = calculation;
  calc.splice(operatorIndex, 2);
}

function division() {
  operatorIndex = calc.indexOf('/');
  a = parseFloat(calc[operatorIndex - 1]);
  b = parseFloat(calc[operatorIndex + 1]);
  calculation = divide(a, b);
  calc[operatorIndex - 1] = calculation;
  calc.splice(operatorIndex, 2);
}

function addition() {
  operatorIndex = calc.indexOf('+');
  a = parseFloat(calc[operatorIndex - 1])
  b = parseFloat(calc[operatorIndex + 1])
  calculation = add(a, b);
  calc[operatorIndex - 1] = calculation;
  calc.splice(operatorIndex, 2);
}

function subtraction() {
  operatorIndex = calc.indexOf('-');
  a = parseFloat(calc[operatorIndex - 1])
  b = parseFloat(calc[operatorIndex + 1])
  calculation = subtract(a, b);
  calc[operatorIndex - 1] = calculation;
  calc.splice(operatorIndex, 2);
}

function findSolution() {
  debugger;
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
  while (calc.includes('+') || calc.includes('-')) {
    if (calc.indexOf('-') === -1) {
      addition();
    } else if (calc.indexOf('+') === -1) {
      subtraction();
    } else if (calc.indexOf('+') < calc.indexOf('-')) {
      addition();
    } else if (calc.indexOf('+') > calc.indexOf('-')) {
      subtraction();
    };
  };
  return calculation;
};

function clear() {
  calc.length = 0;
};

function addEventListeners() {
  let button1 = document.getElementById('1');
  let button2 = document.getElementById('2');

}

