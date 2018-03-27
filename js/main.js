$(document).ready(function(){
	var conorsTodoItems = new ConorsTodoItems();
		conorsTodoItems.fetch();


	var conorsTodoItemsView = new ConorsTodoItemsView({ model: conorsTodoItems });
	$("body").append(conorsTodoItemsView.render().$el);

});