/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var jwt = require('jsonwebtoken');

module.exports = {
  createUser: (req, res) => {
    console.log('REQUEST BODY::',req.body);
    Users.create({
      userId: req.body.userId,
      email: req.body.email,
      password: req.body.password
    }).exec((error) => {
      if(error) {
        console.log('ERROR CREATING USER::', error);
        return res.status(500).send('ERROR CREATING USER',error);
      }
      return res.ok('USER CREATED');
    });
  },

  getAllUsers: async (req, res) => {
    try {
      let usersList = await Users.find();
      return res.status(302).send(usersList);
    } catch (error) {
      return res.serverError(error);
    }
  },

  getUser: async (req, res) => {
    try {
      let user = await Users.findOne({
        userId: req.params.userId
      });
      res.status(302).send(user);
    } catch (error) {
      res.status(404).send('USER NOT FOUND');
    }
  },

  //User login
  /*
  * custom error codes:
  *  -1: email/user does not exist
  *   1: user found and password are valid
  *   2: user found but password are not valid
  * */
  /*
  * User role:
  *   1: standard user
  * */
  userLogin: async (req, res) => {
    let user = await Users.findOne({
      email: req.body.email
    });
    let jwtPayoad = {
      email: req.body.email,
      validity: 'one hour',
      userRole: 1,
      provider: 'EC_1',
    };
    let jwtToken = jwt.sign(jwtPayoad, sails.config.session.secret,{ expiresIn: '1h' });
    if(!user) {
      return res.status(404).send({
        status: 404,
        token: null,
        message: 'user email does not Exits',
        code: -1,
        provider: 'EC_1',
      });
    } else if(user.password === req.body.password){
      return res.ok({
        status: 200,
        token: jwtToken,
        message: 'user email and password are valid',
        code: 1,
        provider: 'EC_1',
      });
    } else if(user.password !== req.body.password) {
      return res.status(406).send({
        status: 406,
        token: null,
        message: 'user email is valid but the password does not match',
        code: 2,
        provider: 'EC_1',
      });
    }

  }
};

