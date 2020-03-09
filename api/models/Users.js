/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs');

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
    },

    /*
    * Customer roles:
    *   1 - Super Admin
    *   2 - Admin
    *   3 - Content-editor
    *   4 - customer
    * */
    userRole: {
      type: 'number',
      required: false,
      unique: false,
      defaultsTo: 4
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
    bcrypt.genSalt(saltRounds, (err,salt) => {
      // eslint-disable-next-line handle-callback-err
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        sails.log('THE hASHED PASS::', hash);
        return hash;
      });
    });
  },
};

