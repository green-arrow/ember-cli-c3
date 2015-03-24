import Ember from 'ember';

export default Ember.Mixin.create({
  chartLegendShow: null,

  chartLegend: function () {
    var result = {};

    var show = this.get('chartLegendShow');

    if (show !== null) { result["show"] = show; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartLegendShow')



});
