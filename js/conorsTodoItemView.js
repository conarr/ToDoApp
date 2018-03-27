var ConorsTodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("Oops! The Model is not specified, fool!");

		this.model.on("change", this.render, this);
	},

/*  HANDLES THE ON/OFF STATE OF THE CHECKBOXES  */
	events: {
		"click #toggle": "onClickToggle",
		"click #delete": "onClickDelete"
	},

	onClickDelete: function(){
		this.model.destroy();
	},

	onClickToggle: function(){
		this.model.toggle();
		this.model.save();
	},

	render: function(){
		this.$el.attr("id", this.model.id);
		
		this.$el.toggleClass("completed", this.model.get("completed"));

		var checked = this.model.get("completed") ? "checked" : "";

		this.$el.html("<input id='toggle' type='checkbox'" + checked +"></input>" + this.model.escape("title") + "<button id='delete'>Delete</button>");

		return this;
	}
});