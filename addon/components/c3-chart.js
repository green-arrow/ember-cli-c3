import Ember from 'ember';

var get = Ember.get;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ember-c3-chart'],

  /**
   * Data object used by C3
   */
  data: {},

  /**
   * C3 JSON configuration
   */
  config: {},

  /**
   * Cached C3 chart object
   */
  _chart: undefined,

  /**
   The Chart
   */
  chart: function() {
    var cachedChart = this.get('_chart');

    if (Ember.isEqual(cachedChart, undefined)) {
      this.generateChart();
      cachedChart = this.get('_chart');
    }

    return cachedChart;
  }.property('_chart'),

  generateChart: function() {
    var cachedChart = this.get('_chart'),
      container = this.get('element'),
      data = this.get('data'),
      config, chart;

    if (!Ember.isEqual(cachedChart, undefined)) {
      // If the element or config changes, we need to
      // destroy the existing chart before re-creating
      cachedChart.destroy();
    }

    if (!Ember.isEqual(container, undefined)) {
      config = this.get('config');
      config['data'] = data;
      config['bindto'] = container;
      chart = c3.generate(config);
      this.set('_chart', chart);
    }
  }.observes('config'),

  didInsertElement: function() {
    this._super();
    var chart = this.get('chart');
    chart.load(this.get('data'));
  },

  chartShouldLoadData: function() {
    var _this = this;
    var chart = this.get('chart');
    var currentIds = this._retrieveCurrentIds();
    var unloadIds = chart.data().mapBy('id').filter(function(id) {
      return currentIds.indexOf(id) < 0;
    });
    var dataToLoad = this.get('data');
    dataToLoad['unload'] = unloadIds;

    chart.load(dataToLoad);
  }.observes('data'),

  /**
   * Get the currently loaded chart ids
   * This differs based on the data type used (rows / columns)
   */
  _retrieveCurrentIds: function() {
    var data = this.get('data');
    var rows = get(data, 'rows');
    var columns = get(data, 'columns');
    var currentIds;

    if (rows) {
      currentIds = rows[0];
    } else if (columns) {
      currentIds = columns.mapBy('firstObject');
    }

    return currentIds;
  }

});
