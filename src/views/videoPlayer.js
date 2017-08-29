var VideoPlayerView = Backbone.View.extend({

  el: ".player",

  initialize: function() {
    this.collection.on('select', this.selectVideo, this);
  },

  selectVideo: function(video) {
    console.log('selected video: ', video);
  },

  render: function() {
    //this.$el.html(this.template());
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

//'<div class="loading">Please wait...</div>'
