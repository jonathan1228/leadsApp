var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* GET home page. */
router.post('/getInitId', function(req, res, next) {
  knex('storeleads').insert({
  				firstName: req.body.firstName,
  				lastName: req.body.lastName,
  				phoneNumber: req.body.phoneNumber,
  				email: req.body.email,
  				address: req.body.address,
  				homeSquareFootage: req.body.homeSquareFootage
        }).returning('id').then(function(data){
            res.json({id: data[0]})
  			})

});

router.post('/add', function(req, res, next){
  knex('storeleads').where({id:req.body.id}).update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    homeSquareFootage: req.body.homeSquareFootage
  }).returning('id').then(function(data){
      res.json({id: data[0]})
  })
})
module.exports = router;
