import DS from 'ember-data';
import config from 'people/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.host,
  headers: {
    'accept': 'application/json',
  }
});
