G.Views.NewGistFormView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    that.user_id = user.id;
    that.newGist = new G.Models.Gist;
    that.newGistFile = new G.Models.GistFile;

    that.gistForm = new Backbone.Form({
      model: that.newGist
    }).render();
  },

  events: {
    "click button#submit-gist" : "submit"
  },

  render: function () {
    var that = this;
    var gistFileFormView = new G.Views.NewGistFileFormView({
      model: that.newGistFile
    }).render();

    that.$el.html(that.gistForm.$el);
    that.$el.append(gistFileFormView.$el);
    that.$el.append("<button id='submit-gist'>Submit</button>");
    return that;
  },

  submit: function (){
    var that = this;

    that.gistForm.commit();
    that.gistFileForm.commit();
    that.newGist.attributes.user_id = that.user_id;
    that.newGist.save();
  }
})