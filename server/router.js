const express = require('express');
var passport = require('passport');
const dbConnection = require('../database/config');




// Note: define the router
var router = express.Router();





router.route('/login')
  .get(function (req, res) {
    var user = { id: 1, email: 'e@e.com' }
    req.login(user, function (done) {
      res.send('done')
    })

  })

router.route('/delete')
  .get(function (req, res) {
    req.session.destroy();
    res.send('session has been deleted')

  })

router.route('/check')
  .get(authenticationMiddleware(), function (req, res) {
    res.send('autho')
  })

//Note:test
router.route('/test')
  .post( function (req, res) {
    console.log(req.body)
    res.send('done')
  })  

//Note : 
function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();
    res.send({

      success: "!!!!auth"
    });
  }
}

//Note: add the passport function 
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var query = `select * from login where id=\"${id}\"`
  dbConnection.db.query(query, function (err, data) {
    if (err) {
      return done(null, err)
    }
    done(null, data[0]);
  })

});






module.exports = router;