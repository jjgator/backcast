var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    var searchView = new SearchView({model : this.videos.at(0)});
    searchView.render();
    
    var listView = new VideoListView({collection : this.videos, el: ".list"});
    listView.render();

    var playerView = new VideoPlayerView( { collection : this.videos, model : this.videos.at(0) } );
    playerView.render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
