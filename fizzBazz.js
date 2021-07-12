/*
Problem: create a loop that execute from 1-100
i) Every time you reach a multiple of 3(3, 6, 9 etc) you replace the number with the word "Fizz" or log "Fizz"
ii) Every time you reach a multiple of 5(5, 10, 15, etc) you replace the number with "Buzz" or log "Buzz"
iii) and if you reach a multiple of 3 AMD 5(15, 30, 46 etc) you replace the number with "FizzBuzz" of log "FizzBuz"
iv) if any of the above condition isn't true then log the current number 
*/

for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
