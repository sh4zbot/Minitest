var TestView = function (model) {
	
	model.addObserver(this);
	
	this.questionNumber = document.getElementById("questionNumber");
	this.question = document.getElementById("question");
	this.sound = document.getElementById("sound");
	this.score = document.getElementById("score");
	this.plusscore = document.getElementById("plusscore");
	this.negscore = document.getElementById("negscore");
	
	//BUTTONS
	this.ans1 = document.getElementById("answer1");
	this.ans2 = document.getElementById("answer2");
	this.ans3 = document.getElementById("answer3");
	this.ans4 = document.getElementById("answer4");
	this.ansbtns = new Array();
	this.ansbtns.push(this.ans1);
	this.ansbtns.push(this.ans2);
	this.ansbtns.push(this.ans3);
	this.ansbtns.push(this.ans4);
	this.listenBtn = document.getElementById("listen");
	this.repeatBtn = document.getElementById("repeatBtn");
	this.sendResultBtn = document.getElementById("sendResultBtn");
	
	//STATIC SOUNDS
	this.correctSnd = document.getElementById("correctSnd");
	this.wrongSnd = document.getElementById("wrongSnd");
	this.scoreSnd = document.getElementById("scoreSnd");
	
	//INIT POPOVER
	$('[data-toggle="popover"]').popover({
        placement : 'bottom',
				container: 'body',
				html: true
    });
	//INIT PROGRESSBAR
	$(document).ready(function() {
		$('.progress .progress-bar').progressbar();
	});
	
	
	this.update = function () {
		this.questionNumber.innerHTML = model.getState() + 1;
		this.question.innerHTML = model.getQuestion();
		var currAnswers = model.getAnswersTuple();
	
		for (i = 0; i<4;i++) {	
			if (currAnswers[i].answer.length > 30) {
				this.ansbtns[i].innerHTML = "<span>" + currAnswers[i].answer.slice(0,30) + "<br/>" +  
				currAnswers[i].answer.slice(30,(currAnswers[i].answer.length -1)) + "</span>";
			}
			else {
				this.ansbtns[i].innerHTML = "<span>" + currAnswers[i].answer + "</span>";
			}
		}
		
		this.score.innerHTML = "Puntos " + model.getScore() + "/" + model.getLength() * 4;
		this.plusscore.innerHTML = "+" + model.getPlusScore();
		this.negscore.innerHTML = "-" + model.getNegScore();
		
		if (model.getSound() != "null") {
			var audiostring = 
				"<audio id='audio'><source src='" + 
				"http://gracias.nu/exercises7/uploads/" +
				model.getSound() + 
				"' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
			this.listenBtn.style.display = 'block';
			this.sound.innerHTML = audiostring;
		}
		
		else {
			this.listenBtn.style.display = 'none';
			this.sound.innerHTML = "";
		}
	}
	
	this.updateProgress = function () {
		var plusStyleWidth = ( model.getPlusScore() / (model.getLength() * 4) ) * 100;
		var negStyleWidth = ( model.getNegScore() / (model.getLength()*4 ) * 100);
		
		document.getElementById("posprog").setAttribute("data-transitiongoal", plusStyleWidth);
		document.getElementById("negprog").setAttribute("data-transitiongoal", negStyleWidth);
		console.log("data: " + document.getElementById("posprog").getAttribute("data-transitiongoal"));

		$(document).ready(function() {
			$('.progress .progress-bar').progressbar();
		});
	}
	

	this.btnReset = function (ansBtns) {
		this.ans1.className="btn btn-default btn-block answer-button";
		this.ans2.className="btn btn-default btn-block answer-button";
		this.ans3.className="btn btn-default btn-block answer-button";
		this.ans4.className="btn btn-default btn-block answer-button";
	}
	
	this.update();
}
