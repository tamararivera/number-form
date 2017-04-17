/* globals $ */

var string = "";
var count = 0;
var sum = 0;
var frequencies = {};

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
    updateFrequencies(data);
    updateStringResults();
  }
  
  $('#myInput').val('');
}

function cleanData() {
  string = "";
  count = 0;
  sum = 0;
  frequencies = {};
  
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

function updateFrequencies(data) {
  var words = data.toLowerCase().split(" ");
  for(var i = 0; i < words.length; i++) {
    var freq = frequencies[words[i]];
    if(freq) {
      frequencies[words[i]]++;
    } else {
      frequencies[words[i]] = 1;
    }
  }
}

function updateStringResults() {
  var keys = Object.keys(frequencies);
  
  $('#conCat').text(string);
  $('#wordFrequencies tbody').html('');
  
  for(var i = 0; i < keys.length; i++) {
    var row = "<tr><td>" + keys[i] + "</td><td>" + frequencies[keys[i]] + "</td></tr>";
    $('#wordFrequencies').append(row);
  }
  
}