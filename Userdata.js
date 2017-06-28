/**
 * Userdata.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    autoCreatedAt: true,
    autoCreatedBy: true,
    autoUpdatedAt: true,

  attributes: {
      nombre: {
          type: 'string',
          required: true,
          model:'user',
      },
      apellido: {
          type: 'string',
          required: true,
          model:'user',
      },
  }
};

