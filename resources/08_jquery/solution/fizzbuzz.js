var i = 1;

while(i<=100){
	var toPrint = i;
	if(i%3 === 0){
	toPrint = 'Fizz';
	}
	if(i%5 === 0){
		toPrint = 'Buzz';
	}
	if(i%3 === 0 && i%5 === 0){
		toPrint = 'FizzBuzz'
	}

	console.log(toPrint);
	i++;
};