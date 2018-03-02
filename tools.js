function sayles() {
	var currentWeek = prompt("Which week is it now");
	var saylesLeft = 75-(currentWeek * 7.5);
	var output = "You should have " + saylesLeft + " Sayles dollars left by the end of the week."
	alert(output)
}