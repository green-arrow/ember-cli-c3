import Ember from 'ember';

export default Ember.Mixin.create({
  chartPadding: null,

  config: function () {
    var result = {};

    var size = this.get('chartSize');
    if (size) { result["size"] = size; }

    var axis = this.get('chartAxis');
    if (axis) { result["axis"] = axis; }

    var bar = this.get('chartBar');
    if (bar) { result["bar"] = bar; }

    var area = this.get('chartArea');
    if (area) { result["area"] = area; }

    var legend = this.get('chartLegend');
    if (legend) { result["legend"] = legend; }

    var color = this.get('chartColor');
    if (color) { result["color"] = color; }

    var grid = this.get('chartGrid');
    if (grid) { result["grid"] = grid; }

    var tooltip = this.get('chartTooltip');
    if (tooltip) { result["tooltip"] = tooltip; }

    var point = this.get('chartPoint');
    if (point) { result["point"] = point; }

    var zoom = this.get('chartZoom');
    if (zoom) { result["zoom"] = zoom; }

    var padding = this.get('chartPadding');
    if (padding) { result["padding"] = padding; }

    return result;
  }.property('chartSize', 'chartAxis', 'chartBar', 'chartArea', 'chartLegend', 'chartColor', 'chartGrid', 'chartTooltip', 'chartPoint', 'chartZoom', 'chartPadding')
});
