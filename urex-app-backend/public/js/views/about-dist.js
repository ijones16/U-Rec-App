app.views.about=Backbone.View.extend({template:_.template($("#about").html()),initialize:function(){this.render()},render:function(){this.$el.html(this.template({}))}});
