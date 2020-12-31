import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import singleSpaEmber from './single-spa-ember';
import singleSpaLeakedGlobals from 'single-spa-leaked-globals';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

window.loader.noConflict({
  require: 'peopleRequire',
  requirejs: 'peopleRequireJS'
});

export default App;


const emberLifecycles = singleSpaEmber({
  App,
  appName: 'people',
  createOpts: {
    rootElement: '#people',
  }
});

const leakedGlobalsLifecycles = singleSpaLeakedGlobals({
  globalVariableNames: ['Ember', 'loader'],
})


export const bootstrap = [
  leakedGlobalsLifecycles.bootstrap,
  emberLifecycles.bootstrap
]
export const mount = [
  leakedGlobalsLifecycles.mount,
  emberLifecycles.mount,
]
export const unmount = [
  leakedGlobalsLifecycles.mount,
  emberLifecycles.unmount,
]
