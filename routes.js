/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {

  // Client authorization endPoints 

  '/': {
    view: 'index'
  },
    'GET /user':{
        controller: 'UserController',
        action:'find',
        skipAssets:'true'
    },

    /*
     *POST create user
     */


'POST /user': {
  controller: 'UserController',
  action:'create'
},
    /*
     *PUT modify user
     */
    'PUT /user': {
        controller: 'UserController',
        action:'update'
    },
    /*
     * DELETE destroy user
     */
    'DELETE /user/:id?': {
        controller: 'UserController',
        action:'destroy',


    },


};
