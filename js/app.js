$(function() {

	var model = new MinitestModel();
	model.loadXmlData();
	var testView = new TestView(model);


	var minitestCtrl = new MinitestCtrl(testView, model);

});