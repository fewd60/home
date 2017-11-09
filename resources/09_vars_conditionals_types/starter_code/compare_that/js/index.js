
function compare(){
	var a = $('#a').val();
	var b = $('#b').val();

	a = parseFloat(a);
	b = parseFloat(b);

	var compareString;

	if(a < b){
		compareString = '<';
	}else if(a > b){
		compareString = '>';
	}else if(a === b){
		compareString = '===';
	}else{
		compareString = 'N/A';
	}

	$('#comparison').html(compareString);

}

$('#submit').click(compare);