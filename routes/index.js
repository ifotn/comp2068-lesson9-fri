var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lesson 5',
    message: 'CRUD with MongoDB - Part 1'
  });
});

module.exports = router;
