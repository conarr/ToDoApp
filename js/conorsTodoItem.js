var ConorsTodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

	url: "fakeUrl",

/*  VALIDATES THE MODEL  */
	validate: function(attrs){
		if (!attrs.description)
			return "Oops! A description is required!";
	},

/*  UPDATES THE STATE OF THE MODEL  */
	toggle: function(){
		this.set("isCompleted", !this.get("isCompleted"));
	}
});