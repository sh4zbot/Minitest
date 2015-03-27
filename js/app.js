$(function() {

	var model = new MinitestModel();
	model.loadXmlData();
	var view = new View(model);
	

	var minitestCtrl = new MinitestCtrl(view, model);

});