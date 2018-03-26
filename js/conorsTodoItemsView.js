var ConorsTodoItemsView = Backbone.View.extend({
	tagName: "ul",

	id: "conorsTodoItems",

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("Oops! The Model is not specified, fool!");

		this.model.on("add", this.onAddConorsTodoItem, this);
	},

	onAddConorsTodoItem: function(conorsTodoItem){
		var view = new ConorsTodoItemView({ model: conorsTodoItem });
		this.$el.append(view.render().$el)
	},

	events: {
		"click #add": "onClickAdd"
	},

	onClickAdd: function(){
		var conorsTodoItem = new ConorsTodoItem({ description: "New Todo Item"});
		this.model.add(conorsTodoItem);
	},

	render: function(){
		var self = this;

		this.$el.append("<button id='add'>Add</button>");

		this.model.each(function(conorsTodoItem){
			var view = new ConorsTodoItemView({ model: conorsTodoItem });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});