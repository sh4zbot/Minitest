var MinitestModel = function () {
	var title = "Minitest";
	var questions = [];
	var sounds = [];
	var answers = [];
	var answersTuple = [];
	var correct = [];
	var negScore = 0;
	var plusScore = 0;
	//var observer = new Object();
	
	var rightFirstArray = [];
	
	var obs;
	
	
	this.addObserver = function(observer) {
		console.log(observer);
		this.observer = observer;
		obs = observer;
	}

	var state = 0;
	
	this.increment = function() {
		state++;
		this.observer.update();
	}
	
	this.rightAns = function() {
		plusScore = plusScore + 4;
		state++;
		
		
		
		setTimeout(function() {
			obs.update();
			obs.btnReset();
		}, 1000);
	}
	
	this.wrongAns = function() {
		negScore = negScore + 1;
		this.observer.update();
	}
	
	this.checkAns = function(ans) {
		if (correct[state] == ans) {
			this.rightAns();
			return true;
		}
		else {
			this.wrongAns();
			return false;
		}
	}
	
	this.checkAnsTuple = function(ans) {
		if (answersTuple[state][ans].correct) {
			this.rightAns();
			return true;
		}
		else {
			this.wrongAns();
			return false;
		}
	}
	
	this.getState = function() {
		return state;
	}
	
	this.getQuestion = function() {
		return questions[state];
	}
	
	this.getAnswers = function() {
		return answers[state];
	}
	
	this.getAnswersTuple = function() {
		return answersTuple[state];
	}
	
	this.getSound = function() {
		return sounds[state];
	}
	
	this.getCorrect = function() {
		return correct[state];
	}
	
	this.getLength = function() {
		return correct.length;
	}
	
	this.getScore = function() {
		return plusScore - negScore;
	}
	
	this.getPlusScore = function() {
		return plusScore;
	}
	
	this.getNegScore = function() {
		return negScore;
	}
	
	this.loadXmlData = function() {
		if (window.XMLHttpRequest)	{
			xhttp=new XMLHttpRequest();
		}

		else {
			xhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}

		//testdata from http://gracias.nu/exercises7/actions_s.php?item=quiz&action=getXMLwSound&quizid=13
		xhttp.open("GET","testdata.xml",false);
		xhttp.send();
		xmlDoc=xhttp.responseXML;

		var xmlItems = xmlDoc.getElementsByTagName("item");

		for (i=0; i<xmlItems.length; i++) {
			var soundNode = xmlItems[i].getElementsByTagName("sound")[0].childNodes[0];
			(soundNode)? sounds.push(soundNode.nodeValue) : sounds.push("null");
							
			questions.push(xmlItems[i].getElementsByTagName("question")[0].childNodes[0].nodeValue);
			
			answers[i] = new Array();
			answersTuple[i] = new Array();
			correct[i] = -1;
			for (j=0; j<4; j++) {
				(xmlItems[i].getElementsByTagName("answer")[j].attributes[0])? correct[i] = j : ""; 
				answers[i][j] = xmlItems[i].getElementsByTagName("answer")[j].childNodes[0].nodeValue;
				
				if (xmlItems[i].getElementsByTagName("answer")[j].attributes[0]) {
					answersTuple[i][j] = { 
						"answer" : xmlItems[i].getElementsByTagName("answer")[j].childNodes[0].nodeValue,
						"correct" : true }
						
				}
				else {
					answersTuple[i][j] = { 
						"answer" : xmlItems[i].getElementsByTagName("answer")[j].childNodes[0].nodeValue,
						"correct" : false }
				}
			}
			answersTuple[i] = shuffle(answersTuple[i]);
		}
		
		//debug
		console.log( questions );
		console.log( sounds );
		console.log( answers );
		console.log( correct );
		console.log( answersTuple );
	}
	
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}