/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  /* ITEMS */
  //Getting all the items for the homepage
  'GET /items': 'EcomController.getAllItems',
  //Creating a new item
  'POST /create': 'EcomController.createItem',
  //Reduce the quantity of the  stock
  'PATCH /delUnits': 'EcomController.deleteUnits',

  /*CATEGORIES*/
  //Creating a new category
  'POST /createCategory': 'CategoriesController.createCategory',
  //Getting all the categories
  'GET /categories': 'CategoriesController.getAllCategories',

  /* USERS */
  //Creating a user
  'POST /createuser': 'UsersController.createUser',
  //Get all users
  'GET /getusers': 'UsersController.getAllUsers',
  //Get one user
  'GET /getuser/:userId': 'UsersController.getUser',
  //User login
  'POST /userlogin': 'UsersController.userLogin',

  /* SAMPLE */
  //Sample hit
  'GET /sample': 'EcomController.sample',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
