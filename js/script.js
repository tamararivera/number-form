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

function updateResults() {
  document.getElementById("count").innerHTML = numbers.length;
  document.getElementById("sum").innerHTML = sum;
  document.getElementById("average").innerHTML = sum/numbers.length;
  
}

/*Taked from stackoverflow http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}