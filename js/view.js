//DishdetailView Object constructor
var View = function (model) {

	this.questionNumber = document.getElementById("questionNumber");
	this.question = document.getElementById("question");
	this.sound = document.getElementById("sound");
	this.score = document.getElementById("score");
	this.plusscore = document.getElementById("plusscore");
	this.negscore = document.getElementById("negscore");
		
	this.ans1 = document.getElementById("answer1");
	this.ans2 = document.getElementById("answer2");
	this.ans3 = document.getElementById("answer3");
	this.ans4 = document.getElementById("answer4");
		
	model.addObserver(this);
	
	this.update = function () {
		this.questionNumber.innerHTML = model.getState() + 1;
		this.question.innerHTML = model.getQuestion();
		var currAnswers = model.getAnswers();
		
		this.ans1.className="btn btn-default btn-block";
		this.ans2.className="btn btn-default btn-block";
		this.ans3.className="btn btn-default btn-block";
		this.ans4.className="btn btn-default btn-block";
		
		this.ans1.innerHTML = currAnswers[0];
		this.ans2.innerHTML = currAnswers[1];
		this.ans3.innerHTML = currAnswers[2];
		this.ans4.innerHTML = currAnswers[3];
		
		this.score.innerHTML = "puntos: " + model.getScore() + "/" + model.getLength();
		this.plusscore.innerHTML = "" + model.getPlusScore();
		this.negscore.innerHTML = "" + model.getNegScore();
		
		if (model.getSound() != "null") {
			var audiostring = 
				"<audio controls><source src='" + 
				"http://gracias.nu/exercises7/uploads/" +
				model.getSound() + 
				"' type='audio/mpeg'>Your browser does not support the audio element.</audio>";

			this.sound.innerHTML = audiostring;
		}
		else {
			this.sound.innerHTML = "";
		}
	}
	this.update();
}
