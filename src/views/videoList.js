var VideoListView = Backbone.View.extend({
  //collection view
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each( function(model){
      this.renderVideo(model);
    }, this);

      // this.renderVideo, this);
    return this;
  },

  renderVideo: function(video){
    var videoView = new VideoListEntryView({model: video, el: ".video-list"});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
