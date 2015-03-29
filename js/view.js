//DishdetailView Object constructor
var View = function (model) {

	this.questionNumber = document.getElementById("questionNumber");
	this.question = document.getElementById("question");
	this.sound = document.getElementById("sound");
	this.score = document.getElementById("score");
	this.plusscore = document.getElementById("plusscore");
	this.negscore = document.getElementById("negscore");
	
	/*
	this.ansButtons = [];
	for (i=1; i<=4; i++) {
		this.ansButtons.push(document.getElementById("answer" + i));
	}
	console.log("this.ansButtons: " + this.ansButtons);
	*/
	
	this.ans1 = document.getElementById("answer1");
	this.ans2 = document.getElementById("answer2");
	this.ans3 = document.getElementById("answer3");
	this.ans4 = document.getElementById("answer4");
	
	this.listenBtn = document.getElementById("listen");
	
	this.correctSnd = document.getElementById("correctSnd");
	this.wrongSnd = document.getElementById("wrongSnd");
	this.scoreSnd = document.getElementById("scoreSnd");
	
	model.addObserver(this);
	
	this.update = function () {
		this.questionNumber.innerHTML = model.getState() + 1;
		this.question.innerHTML = model.getQuestion();
		var currAnswers = model.getAnswersTuple();
		
		this.ans1.innerHTML = "<span>" + currAnswers[0].answer + "</span>";
		this.ans2.innerHTML = "<span>" + currAnswers[1].answer + "</span>";
		this.ans3.innerHTML = "<span>" + currAnswers[2].answer + "</span>";
		this.ans4.innerHTML = "<span>" + currAnswers[3].answer + "</span>";
		
		this.score.innerHTML = "puntos: " + model.getScore() + "/" + model.getLength();
		this.plusscore.innerHTML = "" + model.getPlusScore();
		this.negscore.innerHTML = "" + model.getNegScore();
		
		
		
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
	
	this.btnReset = function (ansBtns) {
		
		this.ans1.className="btn btn-default btn-block answer-button";
		this.ans2.className="btn btn-default btn-block answer-button";
		this.ans3.className="btn btn-default btn-block answer-button";
		this.ans4.className="btn btn-default btn-block answer-button";
		
	}
	
	this.update();
}
