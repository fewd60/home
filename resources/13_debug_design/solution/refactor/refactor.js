//************************************************************************


/*
Use variables to make this a more flexible piece of code
*/
// $('body').append('<img src='images/Will.png' alt='William\'s picture'><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>');

var first_name='William';
var last_name='Neely';
$('body').append('<img src="images/Will.png" alt="'+first_name+'\'s picture"><p>The instructor for this course is '+first_name+' '+last_name+'. '+first_name+' has a degree in Physics from Southwestern College.</p>');
//Why is this better?



//************************************************************************



// $('#container>ol').prepend('<li>Milk</li>');
// $('#container>ol').prepend('<li>Cookies</li>');
// $('#container>ol').prepend('<li>Sugar</li>');
// $('#container>ol').prepend('<li>Bananas</li>');
// $('#container>ol').prepend('<li>Gatorade</li>');

//Use functions to generalize a method and use it several times
createLi('Milk');
createLi('Cookies');
createLi('Sugar');
createLi('Bananas');
createLi('Gatorade');
function createLi(myLiText){
	$('#container>ol').prepend('<li>'+myLiText+'</li>');
}



//************************************************************************



// $('#container>ol').prepend('<li>Milk</li>');
// $('#container>ol').prepend('<li>Cookies</li>');
// $('#container>ol').prepend('<li>Sugar</li>');
// $('#container>ol').prepend('<li>Bananas</li>');
// $('#container>ol').prepend('<li>Gatorade</li>');

/*
Use Arrays along with the function definition to avoid calling for each
specific input.
*/
var groceries=['Milk','Cookies','Sugar','Bananas','Gatorade'];
//forEach cycles through a list and applies a function
groceries.forEach(createLi);



//************************************************************************



// $('#container').css('width','960px');
// $('#main').css('width','960px');

/*
Combine jQuery selectors to operate only once.
*/
$('#container,#main').css('width','960px');



//************************************************************************




// $('#container,#main').css('width','960px');
// $('#container,#main').css('background','red');
// $('#container,#main').css('color','purple');

/*
	Combine multiple jQuery css, attr, etc changes
*/ 
$("#container, #main").css({
	"width":"960px",
	"background":"red",
	"color":"purple"
});

/*
	Even better would be to have a CSS class with these styles and add
	that class to the proper elements when necessary
	.additional-styles{
		width:960px;
		background:red;
		color:purple;
	}
*/
$("#container, #main").addClass('additional-styles');




//************************************************************************




// $('input').css('width','200px')
// $('input').attr('placeholder','My placeholder');
// $('input').before('<label>My input</label>');

/*
Chain jQuery function calls so that you don't have to re-select the 
*/
$('input').css('width','200px')
	.attr('placeholder','My placeholder')
	.before('<label>My input</label>');
