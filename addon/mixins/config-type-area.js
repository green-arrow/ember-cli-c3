import Ember from 'ember';

export default Ember.Mixin.create({
  chartAreaZeroBased: null,

  chartArea: function () {
    var result = {};

    var zeroBased = this.get('chartAreaZeroBased');
    if (zeroBased !== null) { result["zerobased"] = zeroBased; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartAreaZeroBased')
});
