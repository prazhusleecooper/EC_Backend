/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    userId: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },

    email: {
      type: 'string',
      unique: true,
      required: true,
      allowNull: false,
    },

    password: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
    },

    cartItems: {
      type: 'json',
      columnType: 'array',
      required: false,
      unique: false,
    }
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

  generateHash: (password) => {
    let saltRounds = 15;
    // eslint-disable-next-line handle-callback-err
    bcrypt.genSalt(saltRounds, function(err,salt) {
      // eslint-disable-next-line handle-callback-err
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        sails.log('THE hASHED PASS::', hash);
        return hash;
      });
    });
  },
};

