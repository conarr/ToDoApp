var ConorsTodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

/*  CALLS THE SOURCE API FOR TO DO ITEMS  */
	urlRoot: "https://jsonplaceholder.typicode.com/todos",

/*  VALIDATES THE MODEL  */
	validate: function(attrs){
		if (!attrs.title)
			return "Oops! A title is required!";
	},

/*  UPDATES THE STATE OF THE MODEL  */
	toggle: function(){
		this.set("completed", !this.get("completed"));
	}
});