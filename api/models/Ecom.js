/**
 * Ecom.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      allowNull: false
    },
    img: {
      type: 'json',
      columnType: 'array',
      required: true,
      allowNull: false
    },
    price: {
      type: 'string',
      required: true,
      allowNull: false
    },
    uid: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: true
    },
    description: {
      type: 'string',
      required: true,
      allowNull: false
    },
    category: {
      type: 'string',
      required: true,
      allowNull: false
    },
    quantity: {
      type: 'number',
      required: true,
      allowNull: false
    },
    total_price: {
      type: 'number',
      required: true,
      allowNull: false
    },
    totalQuantity: {
      type: 'number',
      required: true,
      allowNull: false
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

