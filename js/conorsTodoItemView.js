var ConorsTodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("Oops! The Model is not specified, fool!");

		this.model.on("change", this.render, this);
	},

/*  HANDLES THE ON/OFF STATE OF THE CHECKBOXES  */
	events: {
		"click #toggle": "onClickToggle"
	},

	onClickToggle: function(){
			this.model.toggle();
			console.log(this.model.toJSON());
	},

	render: function(){
		this.$el.toggleClass("completed", this.model.get("isCompleted"));

		var checked = this.model.get("isCompleted") ? "checked" : "";

		this.$el.html("<input id='toggle' type='checkbox'" + checked +"></input>" + this.model.escape("description"));

		return this;
	}
});