app.views.cms = Backbone.View.extend({
	template: _.template($("#home").html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template({}));
	}
});