/* globals $ */

var string = "";
var count = 0;
var sum = 0;

$('#submit').on('click', addData);
$('#reset').on('click', cleanData);

function addData() {
  var data = $("#myInput").val();
  if($.isNumeric(data)) {
    count ++;
    sum += parseFloat(data);
    updateNumberResults();
  } else {
    string += data + " ";
    updateStringResults();
  }
  
  $('#myInput').val('');
}

function cleanData() {
  string = "";
  count = 0;
  sum = 0;
  
  updateNumberResults();
  updateStringResults();
}

function updateNumberResults() {
  var average = sum/count;
  if(isNaN(average)) {
    average = 0;
  }
  
  $('#count').text(count);
  $('#sum').text(sum);
  $('#average').text(average);
}

function updateStringResults() {
  $('#conCat').text(string);
}