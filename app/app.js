import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import singleSpaEmber from './single-spa-ember';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;


const emberLifecycles = singleSpaEmber({
  App,
  appName: 'people',
  createOpts: {
    rootElement: '#people',
  }
});

export const { bootstrap, mount, unmount } = emberLifecycles;
