import Ember from 'ember';

export default Ember.Mixin.create({
  dataArray: [],
  dataValues: [],
  dataChartType: 'bar',

  dataLabel: null,
  dataGrouped: null,
  dataChartTypes: null,

  keys: function () {
    var result = { value: this.get('dataValues') };
    var label = this.get('dataLabel');
    if (label) { result["x"] = label; }
    return result;
  }.property('dataValues', 'dataLabel'),

  data: function () {
    var result = {
      json: this.get('dataArray'),
      keys: this.get('keys'),
      type: this.get('dataChartType')
    };

    var types = this.get('dataChartTypes');
    var groups = this.get('dataGrouped');

    if (types) { result["types"] = types; }
    if (groups) { result["groups"] = [groups]; }

    return result;
  }.property('dataArray', 'dataChartType', 'dataGrouped', 'keys')
});
