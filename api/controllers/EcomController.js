/**
 * EcomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var jwt = require('jsonwebtoken');
var categoriesController = require('./CategoriesController');

module.exports = {
  // Getting all the items for the home page
  getAllItems: async (req, res) => {
    try {
      let itemsList = await Ecom.find({});
      return res.ok(itemsList);
    } catch (err) {
      res.status(500).serverError(err);
    }
  },

  // Adding a new item in the inventory
  createItem: async (req, res) => {
    let itemsList = await Ecom.find().sort('uid DESC');
    let currentUid = itemsList[0].uid + 1;
    try {
      await Ecom.create({
        title: req.body.title,
        price: req.body.price,
        uid: currentUid,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        total_price: req.body.total_price,
        totalQuantity: req.body.totalQuantity
      });
      await categoriesController.categoryVerfication(req.body.category);
      res.ok('ITEM CREATED');
    } catch (error) {
      res.serverError(error);
    }
  },

  // Deleting the units from the inventory when it is purchased (Checkout clicked)
  deleteUnits: async (req, res) => {
    try {
      console.log('REQUEST DELETE UNITS::', req.body);
      req.body.map(async item => {
        let patch = {
          totalQuantity: item.totalQuantity
        };
        let result = await Ecom.update({uid: item.uid}, patch);
      });
      res.ok('PATCHed');
    } catch(err) {
      console.log(err);
    }
  },

  //Updating the details of an item
  updateItem: async (req, res) => {
    try {
      let patch = {
        title: req.body.title,
        price: req.body.price,
        total_price: req.body.total_price,
      };
      await Ecom.update({uid: req.body.uid}, patch);
      res.ok('Item updated');
    } catch (error) {
      res.serverError('Error updating the item');
    }
  },

  //Deleting the item completely
  deleteItem: async (req, res) => {
    try {
      await Ecom.destroy({uid: req.body.uid});
      res.ok('item has been deleted');
    } catch (error) {
      res.serverError(error);
    }
  },

  //Sample hit
  sample:async (req, res) => {
    // let categoryCheck = await Categories.find({ categoryName: req.body.category });
    // sails.log("CREATE ITEM::", categoryCheck);
    return res.ok;
  }

};

