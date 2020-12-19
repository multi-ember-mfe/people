'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoRun: false,
    storeConfigInMeta: false,
    fingerprint: {
      customHash: null
    }
  });

  // Not working, using ember-auto-import for now
  //app.import('node_modules/single-spa-ember/amd/single-spa-ember.js', {
    //using: [
      //{ transformation: 'amd', as: 'single-spa-ember' }
    //]
  //});


  return app.toTree();
};
