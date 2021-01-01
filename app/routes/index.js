import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const people = await this.store.findAll('people');
    return { people };
  }
});
