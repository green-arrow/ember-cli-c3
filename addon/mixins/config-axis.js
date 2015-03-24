import Ember from 'ember';

export default Ember.Mixin.create({
  chartAxisRotated: null,

  chartAxisXShow: null,
  chartAxisXType: null,
  chartAxisXPadding: null,

  chartAxisYShow: null,
  chartAxisYPadding: null,
  chartAxisYTick: null,
  chartAxisYCenter: null,

  axisY: function () {
    var result = {};

    var show = this.get('chartAxisYShow');
    if (show !== null) { result["show"] = show; }

    var padding = this.get('chartAxisYPadding');
    if (padding) { result["padding"] = padding; }

    var tick = this.get('chartAxisYTick');
    if (tick) { result["tick"] = tick; }

    var center = this.get('chartAxisYCenter');
    if (center !== null) { result["center"] = center; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartAxisYShow', 'chartAxisYPadding', 'chartAxisYTick', 'chartAxisYCenter'),

  axisX: function () {
    var result = {};

    var type = this.get('chartAxisXType');
    if (type) { result["type"] = type; }

    var show = this.get('chartAxisXShow');
    if (show !== null) { result["show"] = show; }

    var padding = this.get('chartAxisXPadding');
    if (padding) { result["padding"] = padding; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartAxisXType', 'chartAxisXShow', 'chartAxisXPadding'),

  chartAxis: function () {
    var result = {};

    var rotated = this.get('chartAxisRotated');
    if (rotated) { result["rotated"] = rotated; }

    var x = this.get('axisX');
    if (x) { result["x"] = x; }

    var y = this.get('axisY');
    if (y) { result["y"] = y; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartAxisRotated', 'axisX', 'axisY')



});
