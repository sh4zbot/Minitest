var MinitestCtrl = function(view, model) {

	view.ans1.onclick = function () {
		if (model.checkAnsTuple(0) ) {
			view.correctSnd.play();
			view.ans1.className = "btn btn-success btn-block answer-button";
		}
		else {
			view.wrongSnd.play();
			view.ans1.className = "btn btn-danger btn-block answer-button";
		}
		view.updateProgress();
		this.blur();
	}
	
	view.ans2.onclick = function () {
		if (model.checkAnsTuple(1) ) {
			view.correctSnd.play();
			view.ans2.className = "btn btn-success btn-block answer-button";
		}
		else {
			view.wrongSnd.play();
			view.ans2.className = "btn btn-danger btn-block answer-button";
		}
		view.updateProgress();
		this.blur();
	}
	
	view.ans3.onclick = function () {
		if (model.checkAnsTuple(2) ) {
			view.correctSnd.play();
			view.ans3.className = "btn btn-success btn-block answer-button";
		}
		else {
			view.wrongSnd.play();
			view.ans3.className = "btn btn-danger btn-block answer-button";
		}
		view.updateProgress();
		this.blur();
	}
	
	view.ans4.onclick = function () {
		if (model.checkAnsTuple(3) ) {
			view.correctSnd.play();
			view.ans4.className = "btn btn-success btn-block answer-button";
		}
		else {
			view.wrongSnd.play();
			view.ans4.className = "btn btn-danger btn-block answer-button";
		}
		view.updateProgress();
		this.blur();
	}
	
	view.listenBtn.onmouseover = function () {
		var thissound=document.getElementById('audio');
		thissound.play();
		this.blur();
	}
	
	view.listenBtn.addEventListener('click',function(){
    var thissound=document.getElementById('audio');
		thissound.play();
		this.blur();
	});
	
	view.repeatBtn.onclick = function () {
		model.reset();
		this.blur();
	}
}