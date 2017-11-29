"use strict";

function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}

function isPrime(number){
	if(number === 1){
		return true;
	}
	for (var i = 2; i < number; i++) {
		if(number % i ===0 ){
			alert("number is NOT prime.");
			return false;
		}
	}
	alert("number is prime.");
	return true;
}

isPrime(userInput());
// check100Numbers();
// function check100Numbers(){
// 	for (var i = 0; i < 100; i++) {
// 		console.log(i);
// 		console.log(isPrime(i));
// 	}
// }