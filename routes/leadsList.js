var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
    knex('storeleads').then(function(data){
      console.log(data);
      res.json(data)
    })
});

module.exports = router;
