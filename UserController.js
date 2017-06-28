/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');
module.exports = {
    /**
     * Configuration to not create automatic routes
     */
    _config: {
        actions: false,
        shortcuts: false,
        rest: false,
        index: false
    },
    /*
     * crear usuario
     */

       create: function(req, res){
           var user = req.allParams();
        User.create(user).exec(function(err, userCreated){
            if(err){
                res.status(500);
                console.log(err);
                return res.json({message:err, statusCode:500});
            }else {
                res.status(200);
                return res.json({message: "OK", statusCode: 200});
                           }
            });
   },
    /*
    *modificar usurario
     */
    put: function(req, res) {
        var user11 = req.allParams();
        User.update(user11).exec(function(err, updated) {
            if (err) {
                res.status(500);
                return res.json({ message: err, statusCode: 500 });
            } else {
                res.status(200);
                return res.json(updated);

            }

        });
    },

/*
 *Buscar
 */

  find: function(req, res) {
    User.find().exec(function(err, user) {
      if (err) {
        res.status(500);
        console.log(err);
        return res.json({ message: err, statusCode: 500 });
      } else {
        res.status(200);
        return res.json(user);
      }
    });
  },
/*
 *Eliminar
 */

  destroy: function(req, res, next) {
    var id = req.param('id');
    if (!id) {
      return res.badRequest("No proporcionaste id.");
    }
    User.find(id).exec(function (err, result) {
      if (err) return res.serverError(err);
      if (!result) return res.notFound();
      User.destroy(id, function (err) {
        if (err) return next(err);
        return res.json(result);

      });

    });
  },

};



