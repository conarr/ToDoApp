var ConorsTodoItemsView = Backbone.View.extend({
	render: function(){
		var self = this;

		this.model.each(function(conorsTodoItem){
			var view = new ConorsTodoItemView({ model: conorsTodoItem });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});