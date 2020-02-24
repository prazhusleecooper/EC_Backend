/**
 * EcomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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
  createItem: (req, res) => {
    Ecom.create({
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      uid: req.body.uid,
      description: req.body.description,
      category: req.body.category,
      quantity: req.body.quantity,
      total_price: req.body.total_price,
      quantity_available: req.body.quantity_available
    }).exec((err) => {
      if(err) {
        console.log('ERROR CREATING::',err);
        res.serverError(500);
      }
      res.ok('ITEM CREATED');
    });
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

  //Sample hit
  sample: (req, res) => {
    try {
      console.log('SAMPLE HIT');
      res.ok('SAMPLE HIT');
    } catch(err) {
      console.log('SAMPLE HIT FAILED::', err);
    }
  }

};

