var ConorsTodoItem = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.description)
			return "Oops! A description is required!";
	}
});