
// This line of code change the forum button when clicked
function forumClick(){
	var forumContent = 'Welcome on Board\n' + 'You are being Directed';
	alert(forumContent)
}


// Twitter character count

function bmiCal(){
	var weight = prompt("supply your weight")
	var height = prompt("supply your height")
	var bmi = weight / (height ** 2)
	return bmi;
} 


// Love Calculator
function loveCalculator(){
	var firstLoveName = prompt("Supply your name");
	var secondLoveName = prompt("Supply partners name");
	var loveScore = Math.random() * 100;
	loveScore = Math.floor(loveScore) + 1;
	if (loveScore < 50) {
		console.log("you love Score is " + loveScore + " %");
		console.log("you guys can do better");
	}else{
		console.log("you love Score is " + loveScore + " %");
		console.log("you guys are good");
	};
};



function isLeap(x){
	if (x % 4 == 0 && x % 100 == 0 && x % 400 == 0){
		  console.log(x + ' is a leap Year');
	}else{
		console.log(x + ' is not a leap year');
	};
}
