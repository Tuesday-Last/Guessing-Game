var questions = ["Do you find pop-ups annoying? Yes/No",
	 "On a scale of 1-5 how annoying are these pop-ups?",
 	 "Was this pop-up as annoyingas the last one?", 
 	 'Has your annoyance reached a fever pitch yet?', 
 	 "how many more pop-ups would you like to see?",
 	 "Do you you want to just see the page now? Yes/No"]

var responses = ["you win more pop-ups",
	"MORE POP-UPS! YAY!!",
	"You must answer Yes or No",
	"Are you a robot?",
	"3, really?",
	"Man are you going to love this page",
	"Good, good you are still here though",
	"Ok",
	'HAHAHAHA IT IS WORKING!',
	"Well, well well. You certainly have a high tolerance for pop-ups",
	'Uno Mas!',
	'#1',
	'#2',
	'#3',
	'3 Lucky',
	'Four for the WIN!',
	"that is way to many pop-ups, I'm not going to mak you go through that",
	"HAHA there is nothing else to the page!"
]		
var guess1 = prompt(questions[0]);
	console.log(guess1);
	if (guess1 == "yes" || guess1 == "y" || guess1 == 'Yes' || guess1 == "Y"){
	    alert(responses[0]);
		}
	else if (guess1 == 'no' || guess1 == 'No' || guess1 == 'n' || guess1 == 'N'){
		alert(responses[1]);
		}
	else {
		alert(responses[2]);
		}
document.getElementById('reply1').innerHTML = guess1;
var guess2 = prompt(questions[1]);
	console.log(guess2);
	if(guess2 == "1" || guess2 == "2"){
			alert(responses[3]);
		}
	else if(guess2 == "3"){
			alert(responses[4]);
		}
	else{alert(responses[5]);
		}
document.getElementById('reply2').innerHTML = guess2;
var guess3 = prompt(questions[2]);
console.log(guess3);
	if(guess3 == "Yes" || guess3 == "yes" || guess3 == "y"){
			alert(responses[6]);
		}
	else{alert(responses[7]);
		}
document.getElementById('reply3').innerHTML = guess3;
var guess5 = prompt(questions[3]);
console.log(guess5);
	if(guess5 == "Yes" || guess5 == "yes" || guess5 == "y"){
		alert(responses[8]);
	}
	else alert(responses[9]);
document.getElementById('reply5').innerHTML = guess5;
var guess6 = prompt(questions[4]);
	console.log(guess6);
	if(guess6 == "1"){alert(responses[10]);
	}
	else if (guess6 == "2" || guess6 == "two" || guess6 == "Two"){
			alert(responses[11]);
			alert(responses[12]);
		}
	else if (guess6 == "3" || guess6 == "three" || guess6 == "Three"){
			alert(responses[11]);
			alert(responses[12]);
			alert(responses[14]);
		}
	else if (guess6 == "4" || guess6 == "four" || guess6 == "Four"){
			alert(responses[11]);
			alert(responses[12]);
			alert(responses[13]);
			alert(responses[15]);
		}
	else{alert(responses[16]);
		}
document.getElementById('reply5').innerHTML = guess5;
var guess4 = prompt(questions[5]);
console.log(guess4);
		if(guess4 == "Yes" || guess4 == "yes" || guess4 == "y"){
			alert(responses[17]);
		}
		else{alert(responses[7]);
		}
document.getElementById('reply4').innerHTML = guess4;