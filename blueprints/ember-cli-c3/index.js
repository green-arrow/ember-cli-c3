module.exports = {
  normalizeEntityName: function() {},
  description: 'Include dependent bower packages.',

  afterInstall: function(options) {
    var that = this;

    return that.addBowerPackageToProject('c3').then(function() {
      return that.addBowerPackageToProject('d3', '<=3.5.0');
    });
  }
};
