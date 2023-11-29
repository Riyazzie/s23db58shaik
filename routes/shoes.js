var express = require('express');
var router = express.Router();
var passport= require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoes', { title: 'Search Results  shoes' });
});
var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();
/* GET shoes */
router.get('/', shoes_controlers.shoes_view_all_Page );
/* GET detail shoes page */
router.get('/detail', shoes_controlers.shoes_view_one_Page);
/* GET create shoes page */
router.get('/create', shoes_controlers.shoes_create_Page);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
  router.get('/update', secured,shoes_controlers.shoes_update_Page);
  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
/* GET create update page */
//router.get('/update', shoes_controlers.shoes_update_Page);
/* GET delete shoes page */
router.get('/delete', shoes_controlers.shoes_delete_Page);


module.exports = router;

module.exports = router;