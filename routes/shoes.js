var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoes', { title: 'Search Results  shoes' });
});
var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();
/* GET costumes */
router.get('/', shoes_controlers.shoes_view_all_Page );
module.exports = router;

module.exports = router;