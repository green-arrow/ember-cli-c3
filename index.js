/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-c3',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/c3/c3.css');
    app.import(app.bowerDirectory + '/d3/d3.js');
    app.import(app.bowerDirectory + '/c3/c3.js');
  }
};
