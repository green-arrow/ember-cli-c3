import Ember from 'ember';

export default Ember.Mixin.create({
  chartBarRatio: null,
  chartBarZeroBased: null,

  chartBarWidth: function () {
    var result = {};

    var ratio = this.get('chartBarRatio');
    if (ratio) { result["ratio"] = ratio; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartBarRatio'),

  chartBar: function () {
    var result = {};

    var width = this.get('chartBarWidth');
    if (width) { result["width"] = width; }

    var zeroBased = this.get('chartBarZeroBased');
    if (zeroBased !== null) { result["zerobased"] = zeroBased; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartBarWidth', 'chartBarWidth')
});
