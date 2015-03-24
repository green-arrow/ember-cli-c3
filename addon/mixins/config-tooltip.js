import Ember from 'ember';

export default Ember.Mixin.create({
  chartTooltipGrouped: null,
  chartTooltipFormat: null,

  chartTooltip: function () {
    var result = {};

    var grouped = this.get('chartTooltipGrouped');
    if (grouped !== null) { result["grouped"] = grouped; }

    var format = this.get('chartTooltipFormat');
    if (format) { result["format"] = format; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartTooltipGrouped', 'chartTooltipFormat')



});
