module.exports = {
  normalizeEntityName: function() {},
  description: 'Include dependent bower packages.',

  afterInstall: function(options) {
    return this.addAddonToProject('ember-c3-shim');
  }
};
