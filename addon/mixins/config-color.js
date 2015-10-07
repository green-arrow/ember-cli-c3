import Ember from 'ember';

export default Ember.Mixin.create({
  chartColorPattern: null,

  chartColor: function () {
    var result = {};

    var pattern = this.get('chartColorPattern');
    if (pattern) { result["pattern"] = pattern; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartColorPattern')



});
