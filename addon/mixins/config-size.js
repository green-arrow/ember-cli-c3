import Ember from 'ember';

export default Ember.Mixin.create({
  chartSizeHeight: null,
  chartSizeWidth: null,

  chartSize: function () {
    var result = {};

    var height = this.get('chartSizeHeight');
    if (height) { result["height"] = height; }

    var width = this.get('chartSizeWidth');
    if (width) { result["width"] = width; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartSizeHeight', 'chartSizeWidth')



});
