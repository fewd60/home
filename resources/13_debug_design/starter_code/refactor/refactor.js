//Use variables example
$('body').append('<img src="images/Will.png" alt="William\'s picture"><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>');

//Use functions and arrays to simplify
$('#container>ol').prepend('<li>Milk</li>');
$('#container>ol').prepend('<li>Cookies</li>');
$('#container>ol').prepend('<li>Sugar</li>');
$('#container>ol').prepend('<li>Bananas</li>');
$('#container>ol').prepend('<li>Gatorade</li>');

//Combine jQuery selectors
$('#container').css('width','960px');
$('#main').css('width','960px');

//Combine multiple jQuery css, attr, etc changes
$('#container,#main').css('width','960px');
$('#container,#main').css('background','red');
$('#container,#main').css('color','purple');

//Chain jQuery function calls
$('input').css('width','200px')
$('input').attr('placeholder','My placeholder');
$('input').before('<label>My input</label>');

