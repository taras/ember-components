var IntroRoute = Ember.Route.extend({
  model: function() {
    var posts = [];
    //return this.store.find('post');
    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.getJSON('blog.json', function(data) {

        var firstPostHTML = '';
        var result = data.forEach(function(post) {
          if(post.id && post.id === 1){
            firstPostHTML = new Ember.Handlebars.SafeString(post.html);
          }
        });

        resolve(firstPostHTML);

      }).fail(reject);
    });
  },
  afterModel: function() {
    // var components = [];
    // return new Ember.RSVP.Promise(function(resolve, reject) {
    //   $.getJSON('http://ember-components.com/api/v1/get_posts?callback=?', function(data) {

    //     var result = data.posts.map(function(doc) {
    //       console.log(doc);
    //       //return App.Component.create(doc.value);
    //     });

    //     // data.rows.forEach(function(doc){
    //     //   var c = App.Component.create(doc.value);
    //     //   console.log('Doc id: %@'.fmt(doc.id));
    //     //   components.pushObject(c);
    //     // });

    //     resolve(result);

    //   }).fail(reject);
    // });
  }
});

export default IntroRoute;
