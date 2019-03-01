var Trader = require('../models/trader');

module.exports = {
  index,
  help
};

function index(req, res) {
  console.log(req.user);
  res.render('traders/index', { tabTitle: 'Slime Trader', user: req.user, name: req.user.name, inventory: req.user.inventory});
}

function help(req, res) {
  res.render('traders/help', { tabTitle: 'Slime Trader', user: req.user, name: req.user.name});
}