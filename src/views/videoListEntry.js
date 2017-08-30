var VideoListEntryView = Backbone.View.extend({
  //model view
  initialize: function() {
    // this.$el.find('.video-list-entry-title').on('click', this.model.select);
  },

  events : {
    "click .video-list-entry-title" : "handleClick"
  },

  render: function() {
    // console.log('video list entry html: ', this.$el)
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  handleClick : function(param) {
    // debugger;
    // console.log('handleClick parameter: ', param);
    console.log(this.model);
    // console.log('context: ', this);
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
