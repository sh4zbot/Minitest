var MinitestCtrl = function(view, model) {
	
	view.ans1.onclick = function () {
		if (model.checkAns(0) ) {
			view.ans1.className = "btn btn-success btn-block";
		}
		else {
			view.ans1.className = "btn btn-danger btn-block";
		}
	}
	
	view.ans2.onclick = function () {
		if (model.checkAns(1) ) {
			view.ans2.className = "btn btn-success btn-block";
		}
		else {
			view.ans2.className = "btn btn-danger btn-block";
		}
	}
	
	view.ans3.onclick = function () {
		if (model.checkAns(2) ) {
			view.ans3.className = "btn btn-success btn-block";
		}
		else {
			view.ans3.className = "btn btn-danger btn-block";
		}
	}
	
	view.ans4.onclick = function () {
		if (model.checkAns(3) ) {
			view.ans4.className = "btn btn-success btn-block";
		}
		else {
			view.ans4.className = "btn btn-danger btn-block";
		}
	}

}