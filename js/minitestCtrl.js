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
	}
	
	$('[data-toggle="popover"]').popover({
        placement : 'bottom'
    });
	

	/*
	for (var i = 0; i<4; i++) {
		view.ansButtons[i].onclick = function (i) {
			console.log("in the loop i: " + i);
			if (model.checkAnsTuple(i) ) {
				view.correctSnd.play();
				view.ansButtons[i].className = "btn btn-success btn-block answer-button";
			}
			else {
				view.ansButtons[i].className = "btn btn-danger btn-block answer-button";
			}
		}
	}
	*/
	
	view.listenBtn.onmouseover = function () {
		var thissound=document.getElementById('audio');
		thissound.play();
	}

}