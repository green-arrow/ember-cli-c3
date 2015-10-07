import Ember from 'ember';

export default Ember.Mixin.create({
  chartZoomEnabled: null,
  chartZoomRescale: null,

  chartZoom: function () {
    var result = {};

    var enabled = this.get('chartZoomEnabled');
    if (enabled !== null) { result["enabled"] = enabled; }

    var rescale = this.get('chartZoomRescale');
    if (rescale !== null) { result["rescale"] = rescale; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartZoomRescale', 'chartZoomEnabled')



});
