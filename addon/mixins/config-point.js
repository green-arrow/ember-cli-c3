import Ember from 'ember';

export default Ember.Mixin.create({
  chartPointR: null,
  chartPointFocus: null,

  chartPoint: function () {
    var result = {};

    var focus = this.get('chartPointFocus');
    if (focus !== null) { result["focus"] = focus; }

    var r = this.get('chartPointR');
    if (r !== null) { result["r"] = r; }

    return Object.keys(result).length === 0 ? null : result;
  }.property('chartPointR', 'chartPointFocus')



});
