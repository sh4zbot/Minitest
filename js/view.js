//DishdetailView Object constructor
var View = function (model) {

	this.questionNumber = document.getElementById("questionNumber");
	this.question = document.getElementById("question");
	this.sound = document.getElementById("sound");
	this.score = document.getElementById("score");
	this.plusscore = document.getElementById("plusscore");
	this.negscore = document.getElementById("negscore");
	
	
	/*
	var ansBtns = [];
	for (i=1; i<=4; i++) {
		ansBtns.push(document.getElementById("answer" + i));
	}
	console.log(ansBtns);
	*/
	
	this.ans1 = document.getElementById("answer1");
	this.ans2 = document.getElementById("answer2");
	this.ans3 = document.getElementById("answer3");
	this.ans4 = document.getElementById("answer4");
	
	this.listenBtn = document.getElementById("listen");
	
	model.addObserver(this);
	
	this.update = function () {
		this.questionNumber.innerHTML = model.getState() + 1;
		this.question.innerHTML = model.getQuestion();
		var currAnswers = model.getAnswersTuple();
		
		this.ans1.innerHTML = currAnswers[0].answer;
		this.ans2.innerHTML = currAnswers[1].answer;
		this.ans3.innerHTML = currAnswers[2].answer;
		this.ans4.innerHTML = currAnswers[3].answer;
		
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
		
		this.ans1.className="btn btn-default btn-block";
		this.ans2.className="btn btn-default btn-block";
		this.ans3.className="btn btn-default btn-block";
		this.ans4.className="btn btn-default btn-block";
		
	}
	
	this.update();
}
