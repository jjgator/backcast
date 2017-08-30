var Video = Backbone.Model.extend({
//model
  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    // console.log('model is clicked!');
    this.trigger('select', this);
  }

});
