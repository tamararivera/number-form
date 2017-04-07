var numbers = [];
var sum = 0;
function addNumber(event) {
  var formNumber = document.addForm.number.value;
  if(isNumeric(formNumber)) {
    var number = parseFloat(formNumber);
    numbers.push(number);
    sum += number;
  }
  updateResults();
  document.addForm.number.value = "";
  event.preventDefault();
}

function cleanMe() {
  document.addForm.number.value = "";
  numbers = [];
  sum = 0;
  updateResults();
  event.preventDefault();
}

function updateResults() {
  document.getElementById("count").innerHTML = numbers.length;
  document.getElementById("sum").innerHTML = sum;
  var average = sum/numbers.length;
  if(isNaN(average)) {
    average = 0;
  }
  document.getElementById("average").innerHTML = average;
  
}

/*Taked from stackoverflow http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}