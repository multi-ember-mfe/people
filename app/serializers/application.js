import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeArrayResponse: function( store, primaryModelClass, payload)  {
    const newPayload = {};
    newPayload.data = payload.results.map((r,index) => {
      const temp = {};
      temp.attributes = r;
      temp.type = primaryModelClass.modelName;
      temp.id = ++index;
      return temp;
    });

    return newPayload;

  },

  normalizeSingleResponse: function(store, primaryModelClass, payload, id) {
    const newPayload = {};
    newPayload.data = {};
    newPayload.data.type = primaryModelClass.modelName;
    newPayload.data.id = id;
    newPayload.data.attributes = payload;
    return newPayload;
  }
});
