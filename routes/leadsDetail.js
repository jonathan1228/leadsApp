var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/:id', function(req, res, next) {
  console.log(req.params);
  knex('storeleads').where({id: req.params.id}).then(function(data){
    res.json(data[0])
  })
});

module.exports = router;
