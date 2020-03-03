/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createCategory: (req, res) => {
    Categories.create({
      categoryName: req.body.categoryName
    }).exec((err) => {
      if(err) {
        return res.serverError(err);
      }
      return res.ok('CATEGORY CREATED');
    });
  },

  getAllCategories: async (req, res) => {
    try {
      let catList = await Categories.find();
      return res.ok(catList);
    } catch (err) {
      return res.serverError(err);
    }
  },

  categoryVerfication: async (category) => {
    let checker = await Categories.findOne({ categoryName: category });
    if(!checker) {
      try {
        await Categories.create({
          categoryName: category
        });
        sails.log('ITEM CATEGORY CREATED');
      } catch (error) {
        sails.log('ERRoR CREATING CATEGORY', error);
      }
    } else {
      sails.log('Category already available');
    }
  },
};

