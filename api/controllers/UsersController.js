/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports = {
  //Create a new user
  /*
  * Signup status codes:
  *   1: Signup successful(email does not exist)
  *  -1: email already exists - signup unsuccessful
  * */
  createUser: async (req, res) => {
    // console.log("THE SYNC HASH IS", hash);
    let usersList = await Users.find().sort('userId DESC');
    let userId = 0;
    let flag = 0;
    if(usersList.length > 0) {
      usersList.map(user => {
        if(user.email === req.body.email) {
          flag = 1;
        }
      });
    } else if(usersList.length === 0){
      userId = 1;
    }
    if(usersList.length !== 0 && flag === 0) {
      userId = usersList[0].userId + 1;
    }
    sails.log('FIN USER ID::', userId);
    sails.log('INTENDED USER ID::', usersList[0].userId + 1);
    if(flag === 1) {
      res.status(406).send({
        status: 406,
        code: -1,
        message: 'Email already exists',
      });
    } else {
      let hash = await bcrypt.hashSync(req.body.password, 10);
      try {
        await Users.create({
          userId: userId,
          email: req.body.email,
          password: hash,
          cartItems: [],
        });
        sails.log('CREATION SUCC');
        return res.ok({
          status: 200,
          code: 1,
          message: 'Signup successful',
        });
      } catch (error) {
        sails.log('CREATION ERR', error);
        return res.status(500).send({
          status: 500,
          code: 0,
          message: 'Signup usuccessful, user has not been created',
        });
      }
    }
  },

  //Retrieve all the users
  getAllUsers: async (req, res) => {
    try {
      let usersList = await Users.find().sort("userId DESC");
      sails.log('USERSLIST::', usersList);
      return res.status(302).send(usersList);
    } catch (error) {
      return res.serverError(error);
    }
  },

  //Retrieve a particular user
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
      userId: user.userId,
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
    } else if(bcrypt.compare(req.body.password, user.password)){
      return res.ok({
        status: 200,
        token: jwtToken,
        message: 'user email and password are valid',
        code: 1,
        provider: 'EC_1',
        cartItems: JSON.stringify(user.cartItems),
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

  },

  //Save the cart items
  saveCartItems: async (req, res) => {
    sails.log('save cart items HIT');
    sails.log('THE not  PARSED CART ITEMS IS:::', req.body.cartItems);
    sails.log('THE PARSED CART ITEMS IS:::', JSON.parse(req.body.cartItems));
    let cartItems = JSON.parse(req.body.cartItems);
    try {
      let newCartItems = {
        cartItems: cartItems
      };
      let result = await Users.update({userId: req.body.userId}, newCartItems);
      sails.log('_____________________________________________________');
      res.ok('ITEMS UPDATED');
    } catch(error) {
      console.log('error saving cart items::', error);
      return res.serverError(error);
    }
  },

  sortHit: async (req, res) => {
    let myQuery = await Users.find().sort({userId: -1});
    sails.log('SORTING::', myQuery[0].userId);
    res.ok("YOIO");
  },
};
