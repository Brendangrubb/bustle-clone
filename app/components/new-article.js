import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        teaser: this.get('teaser'),
        body: this.get('body'),
        photo: this.get('photo')
      };
      console.log(params);
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
