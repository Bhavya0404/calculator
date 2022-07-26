const data = document.getElementById("data");

const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");
const decimal = document.getElementById("decimal");

function sevenNo() {
  data.value += seven.textContent;
}

function eightNo() {
  data.value += eight.textContent;
}

function nineNo() {
  data.value += nine.textContent;
}

function fourNo() {
  data.value += four.textContent;
}

function fiveNo() {
  data.value += five.textContent;
}

function sixNo() {
  data.value += six.textContent;
}

function oneNo() {
  data.value += one.textContent;
}

function twoNo() {
  data.value += two.textContent;
}

function threeNo() {
  data.value += three.textContent;
}

function zeroNo() {
  data.value += zero.textContent;
}

function decimalNo() {
  data.value += ".";
}

function backspace() {
  if (data.value == "") {
    console.log("Empty value");
    return;
  }
  let temp = "";
  for (let i = 0; i < data.value.length - 1; i++) {
    temp += data.value[i];
  }

  data.value = "";
  data.value += temp;
  temp = "";
}

var value1 = null;
var value2 = null;
var operator;
var result;

function percentNo() {
  value2 = data.value / 100;
  data.value = "";
  data.value += value2;
}

//   -- plus?
function changeSign() {
  let temp = data.value;
  data.value = "";
  data.value += "-" * temp;
}

function plusNo() {
  if (data.value == "") {
    console.log("abort");
    return;
  }
  value1 = data.value;
  operator = "+";
  data.value = "";
  console.log(value1);
  console.log(data.value);
}

function minusNo() {
  if (data.value == "") {
    data.value += "-";
    return;
  }
  value1 = data.value;
  operator = "-";
  data.value = "";
  console.log(value1);
  console.log(data.value);
}

function multiplyNo() {
  if (data.value == "") {
    console.log("abort");
    return;
  }
  value1 = data.value;
  operator = "*";
  data.value = "";
  console.log(value1);
  console.log(data.value);
}

function divideNo() {
  if (data.value == "") {
    console.log("abort");
    return;
  }
  value1 = data.value;
  operator = "/";
  data.value = "";
  console.log(value1);
  console.log(data.value);
}

function equalNo() {
  if (data.value == "") {
    console.log("abort");
    return;
  }
  value2 = data.value;
  if (value2 == 0 && operator == "/") {
    console.log("division error");
    data.value = "Division Error";
    return;
  }
  data.value = "";
  console.log(value2);
  result = eval(value1 + operator + value2);
  data.value += result;
  console.log(result);
}

function clearNo() {
  data.value = "";
}




// function keyPressed(e) {
//   var keynum;mm

//   if (window.event) {
//     // IE
//     keynum = e.keyCode;
//     console.log(keynum);
//   } else if (e.which) {
//     // Netscape/Firefox/Opera
//     keynum = e.which;
//     console.log(keynum);
//   }

//   data.value += String.fromCharCode(keynum);
// }
