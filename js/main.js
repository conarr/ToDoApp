$(document).ready(function(){
	var conorsTodoItems = new ConorsTodoItems([
		new ConorsTodoItem({ description: "TodoItem 1" }),
		new ConorsTodoItem({ description: "TodoItem 2" }),
		new ConorsTodoItem({ description: "TodoItem 3" })
		]);

	var conorsTodoItemsView = new ConorsTodoItemsView({ model: conorsTodoItems });
	$("body").append(conorsTodoItemsView.render().$el);

});