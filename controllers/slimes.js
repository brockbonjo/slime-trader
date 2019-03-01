var Trader = require('../models/trader');

module.exports = {
  addSlime
};

function addSlime(req, res) {
  console.log(req.body);
  req.user.inventory.push(req.body);
  req.user.save(function(err) {
    res.redirect('/traders');
  });
}