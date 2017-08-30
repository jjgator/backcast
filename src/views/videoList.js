var VideoListView = Backbone.View.extend({
  //collection view
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.each( function(model){
      this.renderVideo(model);
    }, this);

      // this.renderVideo, this);
    return this;
  },

  renderVideo: function(video){
    // console.log(this.$('.video-list'))
    // var videoView = new VideoListEntryView({ model: video, el: this.$(".video-list") });
    // this.$el.append(videoView.render());

    var videoView = new VideoListEntryView( { model: video } );
    this.$el.append(videoView.render().$el);
  },

  template: templateURL('src/templates/videoList.html')

});
