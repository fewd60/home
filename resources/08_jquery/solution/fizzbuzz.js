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

// OR

// for all numbers between 1 and 100
// loop through all numbers i where 1≤i≤100
for (var i = 1; i <=100; i++) {
	//if i is a multiple of 3 and 5
	if(i%3 === 0 && i%5 === 0){
		console.log('fizzbuzz');
	}
	//else if i is a multiple of 5
	else if (i%5 === 0){
		console.log('buzz');
	}
	//else if i is a multiple of 3
	else if(i%3 === 0){
		console.log('fizz');
	}
	else{
		console.log(i);
	}
}	// end loop (increment i so it gets bigger)
