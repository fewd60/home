
function compare() {
  var comparisonSym;
  var a = $('#a').val();
  var b = $('#b').val();

  a = parseFloat(a);
  b = parseFloat(b);

  if (a < b) {
    comparisonSym = '<';
  } else if (a > b) {
    comparisonSym = '>';
  } else if (a === b) {
    comparisonSym = '===';
  } else{
    comparisonSym = 'N/A';
  }
  
 $('#comparison').html(comparisonSym);
}

$('#submit').click(compare);