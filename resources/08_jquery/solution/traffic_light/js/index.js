//Implement the red light using jQuery. Don't forget to add the script tags.
$('#stopButton').click(function(){
	$('.bulb').css({"background-color":"black"});
	$('#stopLight').css({"background-color":"red"});
});

$('#slowButton').click(function(){
	$('.bulb').css({"background-color":"black"});
	$('#slowLight').css({"background-color":"yellow"});
});

$('#goButton').click(function(){
	$('.bulb').css({"background-color":"black"});
	$('#goLight').css({"background-color":"yellow"});
});