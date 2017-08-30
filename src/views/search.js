var SearchView = Backbone.View.extend({

  el : ".search",
  
  events : {
    "click .btn" : "handleClick"
  },

  handleClick : function(){
    console.log($(".form-control").val())
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
