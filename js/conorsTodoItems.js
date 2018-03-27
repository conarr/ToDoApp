var ConorsTodoItems = Backbone.Collection.extend({
	model: ConorsTodoItem,

/*  CALLS THE SOURCE API FOR TO DO ITEMS  */
	url: "https://jsonplaceholder.typicode.com/todos"
});