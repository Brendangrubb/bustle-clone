import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  teaser: DS.attr(),
  body: DS.attr(),
  photo: DS.attr()
});
