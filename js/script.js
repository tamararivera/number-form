/* globals google */
var numbers = [];
var sum = 0;
function addNumber(event) {
  var formNumber = document.addForm.number.value;
  if(isNumeric(formNumber)) {
    var number = parseFloat(formNumber);
    numbers.push([numbers.length + "", number]);
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
  if(numbers.length !== 0) {
    drawVisualization(); 
  } else {
    document.getElementById('chart').innerHTML = "";
  }
}

/*Taked from stackoverflow http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var matrix = numbers.slice(0);
  matrix.unshift(['Order', 'Number']);
  var data = google.visualization.arrayToDataTable(matrix);

  var options = {
    title : 'Numbers',
    vAxis: {title: 'Number'},
    hAxis: {title: 'Order'},
    seriesType: 'area',
    legend: {position: 'none'}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart'));
  chart.draw(data, options);
}