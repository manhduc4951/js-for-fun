// INIT
var numBoxes = 6;
setup();	
playGame();

// EVENT
document.getElementById("easy_mode").addEventListener("click", function(){
	numBoxes = 3;	
	setup();
	playGame();
});
document.getElementById("hard_mode").addEventListener("click", function(){
	numBoxes = 6;
	setup();
	playGame();	
});
document.getElementById("new_game").addEventListener("click", function() {
	var boxes = document.querySelectorAll(".in");
	document.getElementById("correct_wrong_label").textContent = "";
	for(var i = 0; i < boxes.length; i++) {
		boxes[i].style.display = "block";
	}
	playGame();	
});

// FUNCTION
function randomNumb() {
	return Math.floor(Math.random() * 256);
}
function randomColor() {
	var color = "rgb(";
	color += randomNumb() + ", ";
	color += randomNumb() + ", ";
	color += randomNumb() + ")";
	return color;

}

function setup() {
	var mainContainer = document.getElementById("main_container");
	mainContainer.innerHTML = "";		
	for(var i = 0; i < numBoxes; i++) {
		var e = document.createElement('div');
		e.innerHTML = '<div class="col-xs-4"><div class="dummy"></div> <div class="in red"> </div></div>';			
		mainContainer.appendChild(e);
	}

}

function playGame() {
	var boxes = document.querySelectorAll(".in");
	var listColors = [];
	for(var i = 0; i < boxes.length; i++) {
		listColors.push(randomColor());
	}

	var correctColor = listColors[Math.floor(Math.random() * boxes.length)];
	document.getElementById("rgb_display").textContent = correctColor;
	
	for(var i = 0; i < boxes.length; i++) {
	    boxes[i].style.background = listColors[i];
	    boxes[i].addEventListener("click", function() {
	    	//console.log(this.style.backgroundColor);
	    	if(this.style.backgroundColor == correctColor) {
	    		console.log("Game over");
	    		document.getElementById("correct_wrong_label").textContent = "Correct";
	    		// show all boxes again + change color
	    		for(var j = 0; j < boxes.length; j++) {
	    			boxes[j].style.display = "block";
	    			boxes[j].style.backgroundColor = correctColor;
	    		}
	    	} else {
	    		// the incorrect one is out
	    		this.style.display = 'none';
	    		document.getElementById("correct_wrong_label").textContent = "Try again";
	    	}
	    });
	}
	
}