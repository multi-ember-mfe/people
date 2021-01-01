import Component from '@ember/component';
import { computed } from '@ember/object';
import pMap from 'p-map';

export default Component.extend({
   links: computed('items', function() {
    const items = [].concat(this.get('items'));
    const mapper = url => {
      return fetch(url).then(r => r.json());
    };

    const models = items.map(i => {
      const temp = i.replace('http://swapi.dev/api/','');
      const [route,id] = temp.split('/');
      return {
        route: route,
        model: id
      };
    });

    return pMap(items, mapper, { concurrency: 4 }).then(values => {
      return values.map((m,index) => {
        return {
          link: `/${models[index].route}/${models[index].model}`,
          text: m.name || m.title || 'Link'
        };
      });
    });
  })
});
