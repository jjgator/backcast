var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    var listView = new VideoListView({collection : this.videos, el: ".list"});
    listView.render();
    var playerView = new VideoPlayerView({collection : this.videos, el: ".player"});
    playerView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
