var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

var Trader = require('../models/trader');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Trader.findOne({'googleId': profile.id}, function(err, trader) {
      if (err) return cb(err);
      if (trader) {
        return cb(null, trader);
      } else {
        var newTrader = new Trader({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newTrader.save(function(err) {
          if (err) return cb(err);
          return cb(null, newTrader);
        });
      }
    });
  }
));

passport.serializeUser(function(trader, done) {
  done(null, trader.id);
});

passport.deserializeUser(function(id, done) {
  Trader.findById(id, function(err, trader) {
    done(err, trader);
  });
})