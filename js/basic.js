var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}

document.write ('<h3>' + greeting + '</h3>');

/*var - variable
quantity - variable name
; - conclusion
example - var quantity;  
= - assignment operator
3 - variable value
example - quantity = 3;
*/