var VideoListEntryView = Backbone.View.extend({
  //model view
  initialize: function() {
    // this.$el.find('.video-list-entry-title').on.('click', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
