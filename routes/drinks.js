/**
 * Created by RFreeman on 10/7/2016.
 */
var express = require('express');
var router = express.Router();

// link to the Drink model
var Drink = require('../models/drink');

// GET main drinks page
router.get('/', function(req, res, next) {
    // use the Drink model to query the db for drink data
    Drink.find(function(err, drinks) {
       if (err) {
           console.log(err);
           res.render('error');
       }
        else {
           // load the drinks page and pass the query result
           res.render('drinks', {
               title: 'All the Booze That\'s Fit to Drink',
               drinks: drinks
           });
       }
    });
});

// make public
module.exports = router;
