import Ember from 'ember';

export default Ember.Mixin.create({
  chartGridYShow: null,
  chartGridYLines: null,

  gridY: function () {
    var result = {};

    var show = this.get('chartGridYShow');
    if (show !== null) { result["show"] = show; }

    var lines = this.get('chartGridYLines');
    if (lines !== null) { result["lines"] = lines; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartGridYShow', 'chartGridYLines'),

  chartGrid: function () {
    var result = {};

    var y = this.get('gridY');
    if (y) { result["y"] = y; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('gridY')



});
