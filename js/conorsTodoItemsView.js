var ConorsTodoItemsView = Backbone.View.extend({
	tagName: "ul",

	id: "conorsTodoItems",

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("Oops! The Model is not specified, fool!");

		this.model.on("add", this.onAddConorsTodoItem, this);
	},

/*  HANDLES ADDING AN ITEM TO THE LIST  */
	onAddConorsTodoItem: function(conorsTodoItem){
		var view = new ConorsTodoItemView({ model: conorsTodoItem });
		this.$el.append(view.render().$el);
	},

/*  HANDLES CLICK EVENTS  */
	events: {
		"click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},

	onKeyPress: function(e){
		if (e.keyCode == 13)
			this.onClickAdd();
	},

	onClickAdd: function(){
		var $textBox = this.$("#newTodoItem");

		if ($textBox.val()){
			var conorsTodoItem = new ConorsTodoItem({ description: $textBox.val() });
			this.model.add(conorsTodoItem);

			$textBox.val("");
		}
	},

	render: function(){
		var self = this;

		this.$el.append("<input type='text' autofocus id='newTodoItem'></input>");
		this.$el.append("<button id='add'>Add</button>");

		this.model.each(function(conorsTodoItem){
			var view = new ConorsTodoItemView({ model: conorsTodoItem });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});