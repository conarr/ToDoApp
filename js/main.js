$(document).ready(function(){
	var conorsTodoItems = new ConorsTodoItems([
		new ConorsTodoItem({ id: 1, description: "TodoItem 1" }),
		new ConorsTodoItem({ id: 2, description: "TodoItem 2" }),
		new ConorsTodoItem({ id: 3, description: "TodoItem 3" })
		]);

	var conorsTodoItemsView = new ConorsTodoItemsView({ model: conorsTodoItems });
	$("body").append(conorsTodoItemsView.render().$el);

});